const readlineSync = require("readline-sync");

const lista = [];

var valor = 1;

console.log("Digite 'exibir' ou 'sair' para exbir a listagem e encerrar:")

while(valor !=0){
    let inserir = readlineSync.question("Digite uma propriedade do CSS: ");
    inserir = inserir.toLowerCase()

    if (inserir == "sair"){
        valor = 0 ,console.log("lista CSS:", lista.sort())
    } else if(inserir == "exibir"){
        console.log("lista CSS:", lista.sort())
    } else if(inserir == ""){
        console.log("Digite uma propriedade do CSS: ")
    }
    else (lista.push(inserir))
}
