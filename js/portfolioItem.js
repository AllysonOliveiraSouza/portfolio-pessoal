var btnVoltar = document.getElementById('btn-voltar');
var btnProximo = document.getElementById('btn-proximo');
var tituloPortfolio = document.getElementById('titulo-portfolio');
var descricaoPortfolio = document.getElementById('descricao-portfolio');
var imagemPortfolio = document.querySelector('.al-portfolio-imagem img');
var contadorPortfolio = document.getElementById('al-num-contador-portfolio');
var numeroItem = 0;
var imagensCaminhoItem = ["./images/vistoriacarros.PNG", "./images/quiz_paises.PNG", "./images/pokemon.PNG"];
var titulosItem = ["Simulador de venda de Veículo", "Quiz dos países", "Página pokémon"];
var descricoesItem = ["Projeto web, no qual é feita uma simulação da venda de um veículo.",
    "Quiz sobre bandeiras de diversos países do mundo.",
    "Página interativa com diversas informações sobre pokémons."];

var transicaoImagemD = function () {
    imagemPortfolio.animate([{ transform: 'rotate(5deg)' }], 500);
}

var transicaoImagemE = function () {
    imagemPortfolio.animate([{ transform: 'rotate(-5deg)' }], 500);
}

var clicarBotaoProximo = function () {
    if ((numeroItem >= 0) && (numeroItem < 2)) {
        numeroItem++;
        contadorPortfolio.innerHTML = numeroItem + 1;
        tituloPortfolio.innerHTML = titulosItem[numeroItem];
        descricaoPortfolio.innerHTML = descricoesItem[numeroItem];
        imagemPortfolio.setAttribute('src', imagensCaminhoItem[numeroItem]);
        transicaoImagemD();

    }
}

var clicarBotaoVoltar = function () {
    if ((numeroItem > 0) && (numeroItem <= 2)) {
        numeroItem--;
        contadorPortfolio.innerHTML = numeroItem + 1;
        tituloPortfolio.innerHTML = titulosItem[numeroItem];
        descricaoPortfolio.innerHTML = descricoesItem[numeroItem];
        imagemPortfolio.setAttribute('src', imagensCaminhoItem[numeroItem]);
        transicaoImagemE();
    }
}

btnProximo.addEventListener("click", clicarBotaoProximo);
btnVoltar.addEventListener("click", clicarBotaoVoltar);