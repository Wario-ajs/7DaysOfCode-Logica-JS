
//Challenge Day One Boolean operations 
let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if ( numeroUm === stringUm) {
    console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
  } else {
    console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
  }
  
  if ( numeroTrinta == stringTrinta) {
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
  } else {
    console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
  }
  
  if (numeroDez === stringDez) {
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
  } else {
    console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
  }

//Challenge Day Two Variables

let nome = prompt("Qual o seu nome?");
let idade = prompt("quantos anos você tem?");
let linguagemDeProgramação = prompt("Qual linguagem de programação você está estudando?");

alert("Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagemDeProgramação + "!")

// Day Two Extra

let perguntaGosta = prompt("Você gosta de estudar " + linguagemDeProgramação + "? Responda com o número 1 para SIM ou 2 para NÃO.");

if (perguntaGosta === 1) {
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
}else{
    alert("Ahh que pena... Já tentou aprender outras linguagens?");
}