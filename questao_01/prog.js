let resposta1 = []
let vetor = [1, 2, 3 ,4 ,5]
let resposta = document.getElementById("resposta")

function calcular(){
    for(i=0;i<5;i++){
        resposta1[i] = vetor[i] * 3
    }
    resposta.innerHTML = "resposta é " + resposta1
}

