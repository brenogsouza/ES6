// verificar o aluno que foi reprovado ou reprovada
var alunos = [
	{nome: 'João', idade: 15, status: 'Reprovado'},
	{nome: 'Maria', idade: 18, status: 'Reprovado'},
	{nome: 'José', idade: 21, status: 'Reprovado'},
	{nome: 'Tulio', idade: 9, status: 'Reprovado'},
	{nome: 'Francisco', idade: 19, status: 'Reprovado'},
	{nome: 'Gabriel', idade: 12, status: 'Reprovado'}
]

var alunosReprovados = []

for(var i=0; i < alunos.length; i++ ) {
	var aluno = alunos[i]
	if(aluno.status === 'Reprovado') {
		alunosReprovados = aluno
		break
	}
}
console.log(alunosReprovados)