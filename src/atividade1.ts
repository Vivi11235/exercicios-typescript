/*1. Crie uma função que receba 2 números e retorne um objeto
contendo a média e também um indicador booleano de
aprovado/reprovado. Considere aprovado com média >= 6.*/
import {MediaNumeros, MediaResultados} from './types';

export function calcularMedia (n1:number, n2:number): MediaNumeros {

    const resultadoMedia: number = (n1 + n2)/2

    if(resultadoMedia >=6){

        let resultado: MediaNumeros={
            media: resultadoMedia,
            resultado: "APROVADO" 
        }

        return resultado
    }else{

        let resultado: MediaNumeros={
            media: resultadoMedia,
            resultado: "REPROVADO" 
        }
        return resultado
    }

}
