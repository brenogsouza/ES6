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

// o find sempre retornará um único registro sendo o primeiro da lista