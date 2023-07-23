"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarDiretor = void 0;
function mostrarDiretor(listaDiretores) {
    for (let i = 0; i < listaDiretores.length; i++) {
        if (listaDiretores[i].salario !== 'N/A') {
            console.log(`Diretor(a) ${listaDiretores[i].nome}, ${listaDiretores[i].idade} anos, comissão nível ${listaDiretores[i].nivelComissionamento}, salário R$${listaDiretores[i].salario},00.`);
        }
        if (listaDiretores[i].salario === 'N/A') {
            console.log(`Diretor(a) ${listaDiretores[i].nome}, ${listaDiretores[i].idade} anos, comissão nível ${listaDiretores[i].nivelComissionamento}, salário ${listaDiretores[i].salario}`);
        }
    }
}
exports.mostrarDiretor = mostrarDiretor;
