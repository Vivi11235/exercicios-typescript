/*Usando o contexto do exercício 6, crie um tipo de usuário que
representa funcionários da diretoria da empresa. O tipo Diretor deve
conter as propriedades: nome, idade, salário (opcional) e nível de
comissionamento (numérico). Crie uma função que receba um
Diretor e mostre suas informações. Exemplos:
a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”*/

import {Diretor} from './types'
import {salario} from './types'


const diretor:Diretor = {
    nome: 'Daphne',
    idade: 30,
    salario: 0,
    nivelComissionamento: 2
}

export function mostrarDadosDiretor(){
    if(!diretor.salario){
        diretor.salario = 'N/A';
    }

    console.log(`Diretor(a) ${diretor.nome}, comissão nível ${diretor.nivelComissionamento} anos, salário ${diretor.salario}`);
}