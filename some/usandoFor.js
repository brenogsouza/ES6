// validar se todos alunos foram Reprovados
var alunos = [
	{nome: 'João', idade: 15, materia: 'Matemática'},
	{nome: 'Maria', idade: 18, materia: 'Portugês'},
	{nome: 'José', idade: 21, materia: 'Geografia'},
	{nome: 'Tulio', idade: 9, materia: 'Inglês'},
	{nome: 'Francisco', idade: 19, materia: 'Química'},
	{nome: 'Gabriel', idade: 12, materia: 'Física'}
]

var temPortugues = false
for (var i = 0; i < alunos.length; i++){
	var portugues = alunos[i];
	if(portugues.materia === 'Portugês') {
		temPortugues = true;
		break
	}
}
console.log('Tem matéria de Portugês?', temPortugues)

// verifica se tem se os items correspondem a condicão