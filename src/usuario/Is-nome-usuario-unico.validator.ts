import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsuarioService } from "./usuario.service";

@Injectable()
@ValidatorConstraint({ async: true })
export class IsNomeDoUsuarioUnicoConstraint implements ValidatorConstraintInterface {

    constructor(private usuarioService :UsuarioService){}

    validate(nomeDeUsuario: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        return !!!this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);
    }
    // defaultMessage?(validationArguments?: ValidationArguments): string {
    //     throw new Error("Method not implemented.");
    // }
    
}
export function IsNomeDoUsuarioUnico(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: IsNomeDoUsuarioUnicoConstraint,
      });
    };
  }