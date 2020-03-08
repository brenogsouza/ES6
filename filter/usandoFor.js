var alunos = [
	{nome: 'João', idade: 15},
	{nome: 'Maria', idade: 18},
	{nome: 'José', idade: 21},
	{nome: 'Tulio', idade: 9},
	{nome: 'Francisco', idade: 19},
	{'Gabriel', idade: 12}
]
// verificar alunos maior ou igual a 18
var alunosDeMaior ={}
for(var i=0; i < alunos.lenght; i++) {
	var aluno = alunosDeMaior[i]
	if(aluno.idade >= 18){
		alunosDeMaior.push(aluno)
	}
}
console.log(alunosDeMaior)