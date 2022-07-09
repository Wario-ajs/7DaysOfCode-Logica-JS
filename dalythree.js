
var perguntaUm = prompt("Qual area da programação deseja seguir? Front-End ou Back-End?");

if ( perguntaUm == "1") {
     var perguntaDoisFront = prompt("Deseja aprender sobre React ou sobre Vue Js?");
}else if (perguntaUm == "2"){
    var perguntaDoisBack = prompt("seja aprender sobre C# ou sobre Java?");
}else{
    alert("resposta invalida")
}


var perguntaTres = prompt("Você prefere seguir se especializando na sua area ou se tornar um desenvolvedor full stack?");

var perguntaQuatro = prompt("Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer?");

while (perguntaQuatro != '') {
    var perguntaQuatro = prompt("Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer?");
}