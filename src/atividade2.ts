/*Crie uma função que receba uma lista de objetos contendo nota e
peso, realize a média das notas considerando o peso. Exemplos:
Lista com 2 notas: (N1*P1) + (N2*P2) / 2 = Resultado
Lista com 3 notas: (N1*P1) + (N2*P2) + (N3*P3) / 3 = Resultado*/
import {Nota} from "./types";

export function calculaMediaPeso(lista: Nota[]): number {
    let somaNotasPonderadas: number = 0;
    let somaPesos: number = 0;

    for (let i = 0; i<lista.length;i++){
        somaNotasPonderadas += lista[i].nota*lista[i].peso;
        somaPesos += lista[i].peso;
    }
    
    let resultado: number = somaNotasPonderadas/somaPesos;

    return resultado;

}