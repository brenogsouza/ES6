// verificar o aluno que foi reprovado ou reprovada
var alunos = [
	{nome: 'João', idade: 15, status: 'Reprovado'},
	{nome: 'Maria', idade: 18, status: 'Reprovado'},
	{nome: 'José', idade: 21, status: 'Reprovado'},
	{nome: 'Tulio', idade: 9, status: 'Reprovado'},
	{nome: 'Francisco', idade: 19, status: 'Reprovado'},
	{nome: 'Gabriel', idade: 12, status: 'Reprovado'}
]

var alunoReprovado = alunos.find(function(aluno){
	return aluno.status ==='Reprovado'
})
console.log(alunoReprovado)

// o find sempre retornará um único registro sendo o primeiro da lista