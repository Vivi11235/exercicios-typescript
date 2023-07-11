"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const atividade1_1 = require("./atividade1");
const atividade2_1 = require("./atividade2");
const atividade4_1 = require("./atividade4");
const atividade5_1 = require("./atividade5");
const atividade6_1 = require("./atividade6");
const listaNotas = [
    {
        valor: 7,
        peso: 5
    },
    {
        valor: 8,
        peso: 3
    },
    {
        valor: 9,
        peso: 7
    }
];
console.log((0, atividade1_1.calcularMedia)(8, 7));
console.log((0, atividade2_1.calcMediaPeso)(listaNotas));
console.log((0, atividade4_1.listarProdutos)());
(0, atividade5_1.mostrarDados)();
(0, atividade6_1.mostrarDadosDiretor)();
