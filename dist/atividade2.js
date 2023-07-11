"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcMediaPeso = void 0;
function calcMediaPeso(listaNotas) {
    let TotalNotas = 0;
    listaNotas.forEach((nota) => {
        let auxiliar = nota.valor * nota.peso;
        TotalNotas += auxiliar;
    });
    return TotalNotas / listaNotas.length;
}
exports.calcMediaPeso = calcMediaPeso;
