let vetor = []
let resposta = document.getElementById("resposta")


function gravar(){

    let primeiro = Number(document.getElementById("primeiro").value)
    let segundo = Number(document.getElementById("segundo").value)
    let terceiro = Number(document.getElementById("terceiro").value)
    let quarto = Number(document.getElementById("quarto").value)
    let quinto = Number(document.getElementById("quinto").value)


    vetor[0] = primeiro
    vetor[1] = segundo
    vetor[2] = terceiro
    vetor[3] = quarto
    vetor[4] = quinto

    console.table(vetor)

}

function inverter(){

    vetor.reverse()

    resposta.innerHTML = vetor
}