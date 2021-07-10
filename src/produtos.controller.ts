import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Produto } from './produtos.models';
import { ProdutosServices } from './produtos.service';

@Controller('produtos')
export class ProdutosController {
  
   constructor(private produtosService: ProdutosServices) {

   }

  @Get()
 async obterTodos(): Promise<Produto[]> {
      return this.produtosService.obterTodos();
    }
    @Get(':id')
    async obterUm(@Param() params):Promise<Produto> {
        return this.produtosService.obterUm(params.id);
    }

    @Post()
    async criar(@Body() produto: Produto ){
        this.produtosService.criar(produto);
    }

    @Put()
    async  altera(@Body() produto:Produto):Promise<[number, Produto[]]> {
        console.log(produto);
        
        return  this.produtosService.alterar(produto);
    }

    @Delete(':id')
    async apagar(@Param() params) {
       this.produtosService.apagar(params.id)
    }
}
