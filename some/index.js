// validar se todos alunos foram Reprovados
var alunos = [
	{nome: 'João', idade: 15, materia: 'Matemática'},
	{nome: 'Maria', idade: 18, materia: 'Portugês'},
	{nome: 'José', idade: 21, materia: 'Geografia'},
	{nome: 'Tulio', idade: 9, materia: 'Inglês'},
	{nome: 'Francisco', idade: 19, materia: 'Química'},
	{nome: 'Gabriel', idade: 12, materia: 'Física'}
]

var temPortugues  = alunos.some(function(portugues){
	return portugues.materia === 'Portugês'
})
console.log('Tem matéria de Portugês?', temPortugues)