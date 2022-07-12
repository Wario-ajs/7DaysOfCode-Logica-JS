const randomNumber = Math.floor(Math.random() * (10 - 0 + 1) + 0);

console.log(randomNumber);

alert("Estou pensando em um número de 0 a 10... Você tem 3 chances para tentar acertar!");

for (let i = 1; i <= 3; i++){

    let attempt = prompt(`Tentativa ${i}`);

    if (attempt == randomNumber) {
        alert (`Parabéns você acertou!!! O número era ${randomNumber}`);
        break
    }else if (i > 2){
        alert(`Que pena você não conseguiu... O número era ${randomNumber}`);
    }
}
