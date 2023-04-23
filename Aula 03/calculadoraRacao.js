let button = document.getElementById("calcular");

let nomeCachorro = document.getElementById("nome").value;
let peso = document.getElementById("peso").value;
let elementoResultado  = document.getElementById("resultado")

let qtdRacao = peso*0.01*1000;

elementoResultado.innerHTML = ' ${nomeCachorro} deve ser ${atdRacao}g por dia'



button.addEventListener("click", calcular);




