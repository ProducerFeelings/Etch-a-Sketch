let color = 'black';
let click = false;

document.addEventListener("DOMContentLoaded", function() {
    createBoard(16);
    console.log('hi');

    document.querySelector('body').addEventListener('click', function (e) {
        if (e.target.tagName !== "BUTTON") {
            click = !click;
            let draw = document.querySelector("#draw");
            if (click) {
                draw.innerHTML = "Now you can Draw";
            } else {
                draw.innerHTML = "You're Now Allowed To Draw";
            }
        }
    });

    let btn_popup = document.querySelector('#popup');
    btn_popup.addEventListener('click', function(){
        let size = getSize();
        createBoard(size);
    });

    let btn_reset = document.querySelector('.btn-primary');
    btn_reset.addEventListener('click', resetBoard);
});

function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++){
        let div = document.createElement('div');
        div.addEventListener('mouseover', colorDiv);
        board.insertAdjacentElement('beforeend', div);
    }
}

function getSize() {
    let input = prompt('What will be the size of the board');
    let message = document.querySelector('.message');
    if (input === "") {
        message.innerHTML = "Please provide a number";
    } else if (input < 0 || input > 100 || isNaN(input)) {
        message.innerHTML = "Provide a number between 1 and 100";
    } else {
        message.innerHTML = 'Now you can play!';
        return input;
    }
}

function colorDiv() {
    if (click) {
        if (color === 'random') {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            this.style.backgroundColor = color;
        }
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function resetBoard() {
    let divs = document.querySelectorAll(".board div");
    divs.forEach((div) => div.style.backgroundColor = 'white');
}
