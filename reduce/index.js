// obter a soma de todos os numeros
var numeros = [1,2,3,4,5,6,7,8,9,10]
// metodo classico: usando para pegar todos os valores do array e torná-los em um valor único

var somar = numeros.reduce(function(soma, numero){
	return soma + numero
}, 0) // 
console.log(somar)

// o parametro numero recebe a cada iteraçao recebe os valores do array
// o parametro soma e o valor que é retornado a cada iteração
// o Zero é o valor inicial que a soma tem