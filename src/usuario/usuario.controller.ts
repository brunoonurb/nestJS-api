import {
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { NestResponse } from '../core/http/nest-response';
import { NestResponseBuilder } from '../core/http/nest-response-builder';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('users')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Post()
  public cria(@Body() usuario: Usuario): NestResponse {
    const usuarioCriado = this.usuarioService.cria(usuario);

    return new NestResponseBuilder()
      .comStatus(HttpStatus.CREATED)
      .comHeaders({
        Location: `656/users/${usuarioCriado.nomeCompleto}`,
      })
      .comBody(usuarioCriado)
      .builder();
    // res.status(HttpStatus.CREATED)
    //     .location(`/users/${usuarioCriado.nomeCompleto}`)
    //     .json(usuarioCriado);
  }

  @Get(':nomeDoUsuario')
  public buscaPorNomeDeUsuario(
    @Param('nomeDoUsuario') nomeDeUsuario: string,
  ): Usuario {
    const usuarioEncontrado =
      this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);
    if (!usuarioEncontrado) {
      throw new NotFoundException({
        statusCode: HttpStatus.NOT_FOUND,
        message: 'Usuário não encontrado.',
      });
    }
    return usuarioEncontrado;
  }
}
