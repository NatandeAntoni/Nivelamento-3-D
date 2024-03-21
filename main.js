const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");

for(let i=0; i <botoes.length; i++){
    botoes[i].onclick = function(){
        for(let j=0; j<botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");

        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}
contadores[0] .textContent = "tempoObjetivo1";
const tempoObjetivo1 = new Date("2024-06-01");