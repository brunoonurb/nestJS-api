import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario/usuario.controller';
import { UsuarioModule } from './usuario/usuario.module';
import { UsuarioService } from './usuario/usuario.service';

@Module({
  imports: [UsuarioModule],
  controllers: [], 
  providers: [],
})
export class AppModule {}
