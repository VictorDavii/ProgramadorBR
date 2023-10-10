let aluno = { 
    nome: 'Igor',
    nota1: 5, 
    nota2: 9,
    media(nota1, nota2){
        let totalMedia = (nota1 + nota2) / 2
        return totalMedia
    }
}
//acima temos de fato um object em uma variavel 'aluno'


let representaAluno = JSON.stringify(aluno)
//Java Script Object Notation - JSON 
//stringify - pegar um objeto e para uma String 


console.log(aluno)
console.log(representaAluno)

//------
//temos um string como se viesse do banco de dados
let bancoDados = '{"nome":"fabio","nota1": 8}'; 

let transfDados = JSON.parse(bancoDados)
//parse - pegar e transformar uma string em um objeto

console.log(bancoDados)
console.log(transfDados)