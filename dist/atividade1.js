"use strict";
/*1. Crie uma função que receba 2 números e retorne um objeto
contendo a média e também um indicador booleano de
aprovado/reprovado. Considere aprovado com média >= 6.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularMedia = void 0;
function calcularMedia(n1, n2) {
    const resultadoMedia = (n1 + n2) / 2;
    if (resultadoMedia >= 6) {
        let resultado = {
            media: resultadoMedia,
            resultado: "APROVADO"
        };
        return resultado;
    }
    else {
        let resultado = {
            media: resultadoMedia,
            resultado: "REPROVADO"
        };
        return resultado;
    }
}
exports.calcularMedia = calcularMedia;
