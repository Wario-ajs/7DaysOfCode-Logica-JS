var numeroUm = "";
var operador = "";
var numeroDois = "";
let numeroUmInt = "";
let numeroDoisInt = "";

function capta () {
    numeroUm = prompt("Qual o primeiro número?");
    numeroUmInt = parseInt(numeroUm);
    operador = prompt("Qual a operação? (responda com + , - , / e *");

    switch (operador) {
        case '+':
            numeroDois = prompt("Qual o segundo número a ser somado?");
            break;
        case '-':
            numeroDois = prompt("Qual o segundo número a ser subtraido?");
            break;
        case '/':
            numeroDois = prompt("Qual o segundo número a ser dividido?");
            break;
        case '*':
            numeroDois = prompt("Qual o segundo número a ser multiplicado?");
            break;
        default:
            alert(`${operador} não é um operador matemático válido!`);
    }

    numeroDoisInt = parseInt(numeroDois);

}

var resultado = "";

function calcula () {
    
    switch (operador) {
        case '+':
            resultado = numeroUmInt + numeroDoisInt;
            alert(`o resultado do calculo é = ${resultado}`);
            break;
        case '-':
            resultado = numeroUmInt - numeroDoisInt;
            alert(`o resultado do calculo é = ${resultado}`);
            break;
        case '/':
            resultado = numeroUmInt / numeroDoisInt;
            alert(`o resultado do calculo é = ${resultado}`);
            break;
        case '*':
            resultado = numeroUmInt * numeroDoisInt;
            alert(`o resultado do calculo é = ${resultado}`);
            break;
        default:
            alert(`${operador} não é um operador matemático válido!`);
    }
}

var continuar = "";

var cond = true;

function continua () {
    continuar = prompt("Deseja continuar utilizando a calculadora? ('Sim' para continuar e 'Não' finalizar");
    if (continuar == "Não") {
        cond = false;
    }
}

while (cond) {

    capta ();
    calcula ();
    continua ();
}