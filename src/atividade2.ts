import {Nota} from './types';

export function calcMediaPeso (listaNotas: Nota[]): number {
    let TotalNotas: number = 0;

    listaNotas.forEach((nota) => {
        let auxiliar: number = nota.valor *nota.peso;
        TotalNotas += auxiliar;
    })

    return TotalNotas / listaNotas.length;
}

