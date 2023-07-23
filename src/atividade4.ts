/*4 - Crie um programa para cadastrar, listar e excluir produtos de uma
lista com tipagem de Produto.*/
import {Produto} from './types';
import {listaProdutos} from './index';

export function funcaoCadastrar(produto: Produto): void {
    listaProdutos.push(produto);
}

export function funcaoListar(): void {
    console.log(listaProdutos);
}

export function funcaoAtualizar(idProduto: string, descricaoProduto: string, precoProduto: number): void {
    const index=listaProdutos.findIndex((item)=>item.id===idProduto);
    if(index!==-1){
      listaProdutos[index].descricao = descricaoProduto;
      listaProdutos[index].preco = precoProduto;
    }else if(index===-1){
      console.log('Id não encontrado.');
    }
    
}

export function funcaoExcluir(idProduto: string): void {
    const index = listaProdutos.findIndex((item)=>item.id===idProduto);
    if(index!==-1){
      listaProdutos.splice(index, 1);
    }else if(index===-1){
      console.log('Índice não encontrado.');
    }  
}

