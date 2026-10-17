//1)Conexão com o JavaScript
console.log("Meu primeiro script foi executado!");

//2) Instruções e comentários
console.log("Atividade de Painel de notas");
console.log("VAMO NESSA!");
console.log(5+1);

//3)Variáveis com const e let
const nomeAluno = "Gabriel";
console.log(`Aluno: ${nomeAluno}`);

const nomeDisciplina = "Desenvolvimento Web";
console.log(`Disciplina: ${nomeDisciplina}`);

let nota1 = 8;
console.log(`Nota: ${nota1}`);

let nota2 = 8;
console.log(`Nota: ${nota2}`);

nota1 = 9;
console.log(`Nota corrigida: ${nota1}`);

//4)var
var nomeProjeto = "Painel de notas";
console.log(nomeProjeto);

//5) Tipo de dados

//string
const materiaAvaliacao = "Desenvolvimento web";
console.log(typeof materiaAvaliacao);
console.log(materiaAvaliacao);

const notas = 8;
console.log(typeof notas)
console.log(notas)

//boolean
const alunoMatriculado = true;
console.log(typeof alunoMatriculado);
console.log(alunoMatriculado);

//null
let notaRecuperacao = null;
console.log(typeof notaRecuperacao);
console.log(notaRecuperacao);

//6) Operadores
const soma = nota1 + nota2;
console.log(`Soma das notas: ${soma}`);

const subtracao = nota1 - nota2;
console.log(`diferença das notas: ${subtracao}`);

const multiplicacao = nota1 * nota2;
console.log(`Multiplicação: ${multiplicacao}`);

const divisao = nota1 / nota2;
console.log(`Divisão: ${divisao}`);

//7) String e templates
console.log(`O Aluno ${nomeAluno} está no curso de ${nomeDisciplina} e tirou nota ${nota1} na primeira prova e ${nota2} na segunda prova. `);

//8) Decisao com 'if' e 'else'
const media = (nota1 + nota2) / 2

if(media >= 7) {
    console.log("Aprovado!");
} else {
    console.log("Precisa revisar")
}

//10) DESAFIO
const alunoD = "Gabriel";
let pNota = 5;
const sNota = 6;
const mediaMin = 7;

const mediaNota = (pNota + sNota) / 2;
const pontosFalta = mediaMin - mediaNota;

if(mediaNota >= mediaMin) {
    console.log(`O aluno ${alunoD} foi aprovado com média ${mediaNota}!`);
} else {
    console.log(`o aluno ${alunoD} teve media ${mediaNota} e precisa de ${pontosFalta} para ser aprovado!`);
}
