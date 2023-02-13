const readlineSync = require("readline-sync");

const lista = [];


console.log("Digite 'exibir' ou 'sair' para exbir a listagem e encerrar:")

while (true) {
    let inserir = readlineSync.question("Digite uma propriedade do CSS: ");
    inserir = inserir.toLowerCase()

    if (inserir == "sair") {
        console.log("lista CSS:", lista.sort())
        break;
    } else if (inserir == "exibir") {
        console.log("lista CSS:", lista.sort())
    } else if (inserir == "") {
        console.log("Digite uma propriedade do CSS: ")
    } else(lista.push(inserir))
}