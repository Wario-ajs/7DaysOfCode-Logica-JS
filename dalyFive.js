var frutas = [];
var laticinios = [];
var congelados = [];
var doces = [];
var padaria = [];
var frios = [];

var cond = true;

while (cond) {

    let deseja = prompt("Deseja adicionar uma comida a sua lista de compras? (Sim ou Não)");

    if(deseja == "Sim") {
        let alimento = prompt("Qual comida você deseja inserir?");
        let grupo = prompt("Em qual categoria essa comida se encaixa? Frutas, Laticinios, Congelados, Doces e Frios. ");

        if (grupo == "Frutas"){
            frutas.push(alimento);
        }else if (grupo == "Laticinios"){
            laticinios.push(alimento);
        }else if (grupo == "Congelados"){
            congelados.push(alimento);
        }else if (grupo == "Doces") {
            doces.push(alimento);
        }else if (grupo == "Frios") {
            frios.push(alimento);
        }

    }else{
        cond = false;
        alert(`Lista De Compras: Frutas - ${frutas}; Laticinios - ${laticinios}; Congelados - ${congelados}; Doces - ${doces}; Frios - ${frios};`);
    }

}