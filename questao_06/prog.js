let vetor = []
let vetor2 = []
let resposta = document.getElementById("resposta")


function gravar(){

    let primeiro = Number(document.getElementById("primeiro").value)
    let segundo = Number(document.getElementById("segundo").value)
    let terceiro = Number(document.getElementById("terceiro").value)
    let quarto = Number(document.getElementById("quarto").value)
    let quinto = Number(document.getElementById("quinto").value)
    let primeiro2 = Number(document.getElementById("primeiro2").value)
    let segundo2 = Number(document.getElementById("segundo2").value)
    let terceiro2 = Number(document.getElementById("terceiro2").value)
    let quarto2 = Number(document.getElementById("quarto2").value)
    let quinto2 = Number(document.getElementById("quinto2").value)

    vetor[0] = primeiro
    vetor[1] = segundo
    vetor[2] = terceiro
    vetor[3] = quarto
    vetor[4] = quinto
    vetor2[0] = primeiro2
    vetor2[1] = segundo2
    vetor2[2] = terceiro2
    vetor2[3] = quarto2
    vetor2[4] = quinto2

    console.table(vetor)
    console.table(vetor2)

}

function calcular(){
    let total = []
    for(i=0;i<5;i++){
        total[i] = vetor[i] - vetor2[i]
    }

    resposta.innerHTML = "A subtração dos numero deu " + total
}