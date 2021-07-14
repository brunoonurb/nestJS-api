import { Module } from "@nestjs/common";
import { IsNomeDoUsuarioUnicoConstraint } from "./Is-nome-usuario-unico.validator";
import { UsuarioController } from "./usuario.controller";
import { UsuarioService } from "./usuario.service";


@Module({
    controllers:[UsuarioController],
    providers:[UsuarioService, 
        IsNomeDoUsuarioUnicoConstraint]
})
export class UsuarioModule {}