// validar se todos alunos foram Reprovados
var alunos = [
	{nome: 'João', idade: 15, status: 'Reprovado'},
	{nome: 'Maria', idade: 18, status: 'Reprovado'},
	{nome: 'José', idade: 21, status: 'Reprovado'},
	{nome: 'Tulio', idade: 9, status: 'Aprovado'},
	{nome: 'Francisco', idade: 19, status: 'Reprovado'},
	{nome: 'Gabriel', idade: 12, status: 'Reprovado'}
]

var alunosReprovados = alunos.every(function(aluno){
	return aluno.status === "Reprovado"
})
console.log(alunosReprovados)

// retorna um boolean sendo se todos os items do array correspondem a uma condição retonará true caso contrário false