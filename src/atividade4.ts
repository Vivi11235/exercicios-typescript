/*4 - Crie um programa para cadastrar, listar e excluir produtos de uma
lista com tipagem de Produto.*/
import {Produto} from './types'

const produtos: Produto[] = [];

const novoProduto:Produto = {
  nome: "caneta",
  codigo: 10
}

export function cadastrarProduto(produto: Produto){
  produtos.push(produto)
}

cadastrarProduto(novoProduto)

export function listarProdutos(){
  return produtos
}

function excluirProduto(codigo: number){
  const index = produtos.findIndex((produto)=>produto.codigo===codigo);
  if(index !== -1){
    produtos.splice(index, 1);
  }
}

excluirProduto(10);



