// validar se todos alunos foram Reprovados
var alunos = [
	{nome: 'João', idade: 15, status: 'Reprovado'},
	{nome: 'Maria', idade: 18, status: 'Reprovado'},
	{nome: 'José', idade: 21, status: 'Reprovado'},
	{nome: 'Tulio', idade: 9, status: 'Aprovado'},
	{nome: 'Francisco', idade: 19, status: 'Reprovado'},
	{nome: 'Gabriel', idade: 12, status: 'Reprovado'}
]

var alunosReprovados = true
for (var i = 0; i < alunos.length; i++){
	var reprovados = alunos[i];
	if(reprovados.status !== 'Reprovado') {
		alunosReprovados = false;
		break
	}
}
console.log(alunosReprovados)