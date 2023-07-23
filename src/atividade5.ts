/*5. Crie um programa para mostrar informações de usuários (User) de
uma empresa. Crie o tipo User com as seguintes propriedades:
nome, idade, ocupação e salário (opcional). Caso o salário do
usuário não seja informado, mostre o valor “N/A”. Exemplo:
a. “Daphne, 23 anos, analista de TI, salário R$ 1000”
b. “Daphne, 23 anos, analista de TI, salário N/A”*/

import {Salario, User} from './types';

export function mostrarUsuario(listaUsuarios: Array<User>): void{
   
    for(let i=0;i<listaUsuarios.length;i++){
        if(listaUsuarios[i].salario!=='N/A'){
            console.log(`${listaUsuarios[i].nome}, ${listaUsuarios[i].idade} anos, ${listaUsuarios[i].ocupacao}, salário R$${listaUsuarios[i].salario},00.`);
        }

        if(listaUsuarios[i].salario==='N/A'){
            console.log(`${listaUsuarios[i].nome}, ${listaUsuarios[i].idade} anos, ${listaUsuarios[i].ocupacao}, salário ${listaUsuarios[i].salario}`);
        }
    }
    
}