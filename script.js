let ordem = [];
let ordemDeClique = [];
let pontos = 0;

//0 = verde
//1 = vermelho
//2 = amarelo
//3 = azul

const blue = document.querySelector(".azul");
const red = document.querySelector(".vermelho");
const yellow = document.querySelector(".amarelo");
const green = document.querySelector(".verde");

//cria ordem aleatoria de cores 
let shuffeOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    ordem[ordem.length] = colorOrder;
    ordemDeClique = [];

    for(let i in ordem){
        let elementColor = createElement(ordem[i]);
        luz(elementColor, Number(i) + 1);
    }
}

//acende a proxima cor
let luz = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add("selected")
    }, number - 250);
    setTimeout(() => {
        element.classList.remove("selected")
    });
}


//checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in ordemDeClique){
        if(ordemDeClique[i] != ordem[i]){
            gameOver();
            break
        }
    }
    if(ordemDeClique.length == ordem.length){
        alert(`Pontuação: ${pontos}\n Você acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}


//função para o clique do usuario
let click = (color) => {
    ordemDeClique[ordemDeClique.length] = color;
    createElement(color).classList.add("selected");

    setTimeout(() => {
        createElement(color).classList.remove("selected");
        checkOrder();
    },250)
}

//função para retornar a cor
let createElement = (color) => {
    if(color == 0){
        return green;
    }else if(color == 1){
        return red;
    }else if (color == 2){
        return yellow;
    }else if(color == 3){
        return red;
    }
}

//função para roximo nivel
let nextLevel = () => {
    pontos++;
    shuffeOrder();
}

//função para game over
let gameOver = () =>{
    alert(`Pontuação: ${pontos}\n Você perdeu o jogo!\nClique em ok para iniciar um novo jogo`);
    ordem = [];
    ordemDeClique = []

    playGame()
}

//função de inicio de jogo
let playGame = () => {
    alert("Bem vindo ao Gênesis! Iniciando um novo jogo");
    pontos = 0

    nextLevel()
}

//eventos de cliques para as cores

green.onclick = () =>click(0);
red.onclick = () =>click(1);
yellow.onclick = () =>click(2);
blue.onclick = () =>click(3);

//inicio
playGame()