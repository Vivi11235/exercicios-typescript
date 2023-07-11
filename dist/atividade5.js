"use strict";
/*5. Crie um programa para mostrar informações de usuários (User) de
uma empresa. Crie o tipo User com as seguintes propriedades:
nome, idade, ocupação e salário (opcional). Caso o salário do
usuário não seja informado, mostre o valor “N/A”. Exemplo:
a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
b. “Daphne, 23 anos, analista de TI, salário N/A”*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarDados = void 0;
const usuario = {
    nome: 'Ricardo',
    idade: 23,
    ocupacao: 'engenheiro',
    salario: 3000
};
function mostrarDados() {
    if (!usuario.salario) {
        usuario.salario = 'N/A';
    }
    console.log(`${usuario.nome}, ${usuario.idade} anos, ${usuario.ocupacao}, salário ${usuario.salario}`);
}
exports.mostrarDados = mostrarDados;
