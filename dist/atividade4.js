"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarProdutos = exports.cadastrarProduto = void 0;
const produtos = [];
const novoProduto = {
    nome: "caneta",
    codigo: 10
};
function cadastrarProduto(produto) {
    produtos.push(produto);
}
exports.cadastrarProduto = cadastrarProduto;
cadastrarProduto(novoProduto);
function listarProdutos() {
    return produtos;
}
exports.listarProdutos = listarProdutos;
function excluirProduto(codigo) {
    const index = produtos.findIndex((produto) => produto.codigo === codigo);
    if (index !== -1) {
        produtos.splice(index, 1);
    }
}
excluirProduto(10);
