let vetor = []
let vetor2 = [1, 2, 3 ,4 ,5]
let resposta = document.getElementById("resposta")

function calcular(){

    let numero = Number(document.getElementById("numero").value)
    for(i=0;i<5;i++){
        vetor[i] = vetor2[i] * numero
    }
    resposta.innerHTML = "resposta é " + vetor
    
}

