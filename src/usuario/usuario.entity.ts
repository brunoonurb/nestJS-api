import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsNomeDoUsuarioUnico } from './Is-nome-usuario-unico.validator';

export class Usuario {
  id: number;

  @Expose({
    name: 'userName',
  })
  @IsNomeDoUsuarioUnico({
    message: 'Nome do usuario deve ser unico',
  })
  @IsNotEmpty({
    message: 'Nome Usuario é obrigatório.',
  })
  @IsString({
    message: 'Nome Usuario precisa ser uma string.',
  })
  nomeDoUsuario: string;

  @Expose({
    name: 'email',
  })
  @IsEmail(
    {},
    {
      message: 'Email precisa ser um endereço de email válido.',
    },
  )
  email: string;

  @Expose({
    name: 'password',
  })
  @Exclude({
    toPlainOnly: true,
  })
  @IsNotEmpty({
    message: 'Senha é obrigatório.',
  })
  senha: string;

  @Expose({
    name: 'fullName',
  })
  @IsNotEmpty({
    message: 'Nome Completo é obrigatorio',
  })
  nomeCompleto: string;

  @Expose({
    name: 'joinDate',
  })
  dataDeEntrada: Date;
}
