import { ArgumentMetadata, Injectable, PipeTransform } from "@nestjs/common";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsNomeDoUsuarioUnico } from "./Is-nome-usuario-unico.validator";

// @Injectable()
export class Usuario {

    id: number;
    
    @IsNomeDoUsuarioUnico({
        message:'Nome do usuario deve ser unico'
    })
    @IsNotEmpty({
        message: 'Nome Usuario é obrigatório.'
    })
    @IsString({
        message: 'Nome Usuario precisa ser uma string.'
    })
    nomeDoUsuario: string;

    @IsEmail({}, {
        message: 'Email precisa ser um endereço de email válido.'
    })
    email: string;

    @IsNotEmpty({
        message: 'Senha é obrigatório.'
    })
    senha: string;

    @IsNotEmpty({
        message:'Nome Completo é obrigatorio'
    })
    nomeCompleto: string;
    dataDeEntrada: Date;
}