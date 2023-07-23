"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listaDiretores = exports.listaUsuarios = exports.listaProdutos = void 0;
const atividade1_1 = require("./atividade1");
const atividade2_1 = require("./atividade2");
const atividade3_1 = require("./atividade3");
const atividade4_1 = require("./atividade4");
const crypto_1 = __importDefault(require("crypto"));
const atividade5_1 = require("./atividade5");
const atividade6_1 = require("./atividade6");
//Exercício 1
console.log((0, atividade1_1.calcularMedia)(8, 7));
//Exercício 2
const nota1 = {
    nota: 8,
    peso: 4
};
const nota2 = {
    nota: 9,
    peso: 2
};
const listaNotas = [];
listaNotas.push(nota1);
listaNotas.push(nota2);
const media = (0, atividade2_1.calculaMediaPeso)(listaNotas);
console.log(media);
//Exercício 3
const carteira = {
    saldo: 0,
    transacoes: []
};
const transacao = {
    valor: 100,
    tipo: 'entrada'
};
console.log((0, atividade3_1.lancarTransacao)(transacao, carteira));
//Exercício 4
exports.listaProdutos = [];
let idGerado = crypto_1.default.randomUUID();
let descricao = "calça legging";
let preco = 100;
let id = idGerado;
(0, atividade4_1.funcaoCadastrar)({ id, descricao, preco });
(0, atividade4_1.funcaoListar)();
(0, atividade4_1.funcaoAtualizar)(id, 'videogame', 1000);
(0, atividade4_1.funcaoListar)();
(0, atividade4_1.funcaoExcluir)(id);
(0, atividade4_1.funcaoListar)();
//Exercício 5
exports.listaUsuarios = [];
const usuario1 = {
    nome: 'Lucas',
    idade: 23,
    ocupacao: 'Analista de sistemas',
    salario: 2000
};
exports.listaUsuarios.push(usuario1);
const usuario2 = {
    nome: 'Daphne',
    idade: 24,
    ocupacao: 'Desempregada',
    salario: 'N/A'
};
exports.listaUsuarios.push(usuario2);
(0, atividade5_1.mostrarUsuario)(exports.listaUsuarios);
//Exercício 6
exports.listaDiretores = [];
const diretor1 = {
    nome: 'Rebeca',
    idade: 24,
    nivelComissionamento: 5,
    salario: 5000
};
exports.listaDiretores.push(diretor1);
const diretor2 = {
    nome: 'Alexandre',
    idade: 34,
    nivelComissionamento: 4,
    salario: 7000
};
exports.listaDiretores.push(diretor2);
(0, atividade6_1.mostrarDiretor)(exports.listaDiretores);
