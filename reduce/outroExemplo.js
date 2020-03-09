// coletar somente os nomes
var personas = [
	{nome: 'Breno', idade: 27},
	{nome: 'Alan', idade: 18},
	{nome: 'CHico', idade: 20}
]

var nomes = personas.reduce(function(arrayPersonas,persona){
	arrayPersonas.push(persona.nome)
	return arrayPersonas
},[])
console.log(nomes)

