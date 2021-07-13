import { Injectable } from "@nestjs/common";
import { Usuario } from "./usuario.entity";

@Injectable()
export class UsuarioService {
    
    private usuarios:Array<Usuario> = [{
        id: 1,
        nomeDoUsuario:"Bruno",
        email:  "Bruno@pedroso",
        senha:  "123",
        nomeCompleto:  "Bruno Da silva Pedroso",
        dataDeEntrada: new Date(),
    }];
    
    public cria(usuario: Usuario): Usuario {
        this.usuarios.push(usuario)
        return usuario;
    }
    
    public buscaPorNomeDeUsuario(nomeDeUsuario: string): Usuario {
        return this.usuarios.find(usuario => usuario.nomeDoUsuario == nomeDeUsuario);        
    }
}