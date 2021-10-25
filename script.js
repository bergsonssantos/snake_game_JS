let canvas = document.getElementById("cobra");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "rigth";
let comida = {
    x: Math.floor(Math.random() * 15 +1) * box,
    y: Math.floor(Math.random() * 15 +1) * box
}

function criarBg(){
    context.fillStyle = "#4ABDAC";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "#FC4A1A";
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

function desenharComida() {
    context.fillStyle = "#F78733";
    context.fillRect(comida.x, comida.y, box, box);

}

document.addEventListener('keydown', update);

function update (event) {
    if ((event.keyCode == 37) && (direction != "right")) direction = "left";
    if ((event.keyCode == 38) && (direction != "down")) direction = "up";
    if ((event.keyCode == 39) && (direction != "left")) direction = "right";
    if ((event.keyCode == 40) && (direction != "up")) direction = "down";
}

function iniciarJogo(){
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].x < 0 && direction == "left") snake[0].x = 15*box;
    if (snake[0].y < 0 && direction == "up") snake[0].y = 15*box;


    criarBg();
    criarCobrinha();
    desenharComida();

    let posX = snake[0].x;
    let posY = snake[0].y;

    if (direction == "right") posX += box;
    if (direction == "left") posX -= box;
    if (direction == "up") posY -= box;
    if (direction == "down") posY += box;

    if (posX != comida.x || posY != comida.y){
        snake.pop();
    } else {
        comida.x = Math.floor(Math.random() * 15 +1) * box;
        comida.y = Math.floor(Math.random() * 15 +1) * box;
    }

    let newHead = {
        x: posX,
        y: posY
    }

    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100);
