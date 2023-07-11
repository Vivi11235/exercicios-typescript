import { calcularMedia } from "./atividade1";
import { calcMediaPeso } from './atividade2';
import { listarProdutos } from './atividade4';
import { mostrarDados } from './atividade5';
import { mostrarDadosDiretor } from './atividade6';


const listaNotas = [
    {
        valor:7,
        peso:5
    },
    {
        valor: 8,
        peso: 3
    },
    {
        valor: 9,
        peso: 7
    }
]
  
console.log(calcularMedia(8,7));
console.log(calcMediaPeso(listaNotas));
console.log(listarProdutos());
mostrarDados();
mostrarDadosDiretor();


