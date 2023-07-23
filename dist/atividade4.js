"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.funcaoExcluir = exports.funcaoAtualizar = exports.funcaoListar = exports.funcaoCadastrar = void 0;
const index_1 = require("./index");
function funcaoCadastrar(produto) {
    index_1.listaProdutos.push(produto);
}
exports.funcaoCadastrar = funcaoCadastrar;
function funcaoListar() {
    console.log(index_1.listaProdutos);
}
exports.funcaoListar = funcaoListar;
function funcaoAtualizar(idProduto, descricaoProduto, precoProduto) {
    const index = index_1.listaProdutos.findIndex((item) => item.id === idProduto);
    if (index !== -1) {
        index_1.listaProdutos[index].descricao = descricaoProduto;
        index_1.listaProdutos[index].preco = precoProduto;
    }
    else if (index === -1) {
        console.log('Id não encontrado.');
    }
}
exports.funcaoAtualizar = funcaoAtualizar;
function funcaoExcluir(idProduto) {
    const index = index_1.listaProdutos.findIndex((item) => item.id === idProduto);
    if (index !== -1) {
        index_1.listaProdutos.splice(index, 1);
    }
    else if (index === -1) {
        console.log('Índice não encontrado.');
    }
}
exports.funcaoExcluir = funcaoExcluir;
