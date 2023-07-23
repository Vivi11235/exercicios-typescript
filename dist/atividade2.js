"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculaMediaPeso = void 0;
function calculaMediaPeso(lista) {
    let somaNotasPonderadas = 0;
    let somaPesos = 0;
    for (let i = 0; i < lista.length; i++) {
        somaNotasPonderadas += lista[i].nota * lista[i].peso;
        somaPesos += lista[i].peso;
    }
    let resultado = somaNotasPonderadas / somaPesos;
    return resultado;
}
exports.calculaMediaPeso = calculaMediaPeso;
