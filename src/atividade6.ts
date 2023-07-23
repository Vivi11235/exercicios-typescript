/*Usando o contexto do exercício 6, crie um tipo de usuário que
representa funcionários da diretoria da empresa. O tipo Diretor deve
conter as propriedades: nome, idade, salário (opcional) e nível de
comissionamento (numérico). Crie uma função que receba um
Diretor e mostre suas informações. Exemplos:
a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”*/
import {Diretor} from './types';

export function mostrarDiretor(listaDiretores: Array<Diretor>): void{
   
    for(let i=0;i<listaDiretores.length;i++){
        if(listaDiretores[i].salario!=='N/A'){
            console.log(`Diretor(a) ${listaDiretores[i].nome}, ${listaDiretores[i].idade} anos, comissão nível ${listaDiretores[i].nivelComissionamento}, salário R$${listaDiretores[i].salario},00.`);
        }

        if(listaDiretores[i].salario==='N/A'){
            console.log(`Diretor(a) ${listaDiretores[i].nome}, ${listaDiretores[i].idade} anos, comissão nível ${listaDiretores[i].nivelComissionamento}, salário ${listaDiretores[i].salario}`);
        }
    }
    
}