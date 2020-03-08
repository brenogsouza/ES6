// verificar alunos maior ou igual a 18
var alunos = [
	{nome: 'João', idade: 15},
	{nome: 'Maria', idade: 18},
	{nome: 'José', idade: 21},
	{nome: 'Tulio', idade: 9},
	{nome: 'Francisco', idade: 19},
	{nome: 'Gabriel', idade: 12}
]

var alunosDeMaior = alunos.filter(function(aluno){
return aluno.idade >= 18
})
console.log(alunosDeMaior)