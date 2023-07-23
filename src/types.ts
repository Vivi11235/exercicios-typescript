// DEFINA O TIPO DE DADO DO OBJETO
// interface => só modela UM OBJETO

export interface MediaNumeros {
    media: number,
    resultado: MediaResultados;
}

export type MediaResultados = 'APROVADO' | 'REPROVADO'

export interface Nota {
    nota: number;
    peso: number;
}

export type Transacao = 'entrada' | 'saida';

export interface dadosTransacao {
	valor: number,
	tipo: Transacao
}

export interface Carteira {
	saldo: number,
	transacoes: Array<dadosTransacao>
}

export interface Produto {
    id: string,
    descricao: string,
    preco: number;
}

export type Salario = number | 'N/A';

export interface User {
    nome: string,
    idade: number,
    ocupacao: string,
    salario: Salario
}

export interface Diretor {
    nome: string,
    idade: number,
    salario: Salario,
    nivelComissionamento: number
}