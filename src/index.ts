import { calcularMedia } from "./atividade1";
import {Nota} from "./types";
import {calculaMediaPeso} from "./atividade2";
import {Transacao} from "./types";
import {dadosTransacao} from "./types";
import {Carteira} from "./types";
import {lancarTransacao} from "./atividade3";
import {MediaNumeros, MediaResultados} from './types';
import {funcaoCadastrar, funcaoListar, funcaoAtualizar, funcaoExcluir} from './atividade4';
import crypto from 'crypto';
import {Produto} from './types';
import {mostrarUsuario} from './atividade5';
import {Salario, User} from './types';
import {Diretor} from './types';
import { mostrarDiretor } from "./atividade6";

//Exercício 1
console.log(calcularMedia(8,7));

//Exercício 2
const nota1: Nota = {
    nota: 8,
    peso: 4
}

const nota2: Nota = {
    nota: 9,
    peso: 2
}

const listaNotas: Nota[] = [];
listaNotas.push(nota1);
listaNotas.push(nota2);

const media: number = calculaMediaPeso(listaNotas);
console.log(media)

//Exercício 3
const carteira: Carteira = {
	saldo: 0,
	transacoes: []
}

const transacao: dadosTransacao = {
	valor: 100,
	tipo: 'entrada'
}

console.log(lancarTransacao(transacao, carteira));

//Exercício 4
export const listaProdutos: Array<Produto> = [];

let idGerado:string = crypto.randomUUID();
let descricao:string = "calça legging";
let preco:number = 100;

let id:string = idGerado;

funcaoCadastrar({id, descricao, preco});
funcaoListar();
funcaoAtualizar(id,'videogame', 1000);
funcaoListar();
funcaoExcluir(id);
funcaoListar();

//Exercício 5

export const listaUsuarios:Array<User> = [];

const usuario1: User = {
    nome: 'Lucas',
    idade: 23,
    ocupacao: 'Analista de sistemas',
    salario: 2000 
}

listaUsuarios.push(usuario1)

const usuario2: User = {
    nome: 'Daphne',
    idade: 24,
    ocupacao: 'Desempregada',
    salario: 'N/A'
}

listaUsuarios.push(usuario2);

mostrarUsuario(listaUsuarios);

//Exercício 6

export const listaDiretores:Array<Diretor> = [];

const diretor1: Diretor = {
    nome: 'Rebeca',
    idade: 24,
    nivelComissionamento: 5,
    salario: 5000 
}

listaDiretores.push(diretor1);

const diretor2: Diretor = {
    nome: 'Alexandre',
    idade: 34,
    nivelComissionamento: 4,
    salario: 7000
}

listaDiretores.push(diretor2);

mostrarDiretor(listaDiretores);
