import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";

@Controller('users')
export class UsuarioController {
    constructor(private usuarioService: UsuarioService){}

    @Post()
    public cria(@Body() usuario: Usuario) :Usuario {
        
        const usuarioCriado = this.usuarioService.cria(usuario)
        return usuarioCriado;
    }

    @Get(':nomeDoUsuario')
    public buscaPorNomeDeUsuario(@Param('nomeDoUsuario') nomeDeUsuario: string):Usuario {
        const usuarioEncontrado = this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);
        return usuarioEncontrado;
    }
}