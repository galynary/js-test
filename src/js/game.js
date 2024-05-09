const container = document.querySelector(".container-game");
const nameWiner = document.querySelector(".game-title");
console.log(container)
const wins =[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];
let player ="X";
let historyX =[];
let historyO =[];

function createMarkup() {
    let markup = "";
    for ( let i = 1; i < 10; i += 1) {
        markup += `<div class="item js-item" data-id="${i}"></div>`;
        }
        container.innerHTML = markup;
}
createMarkup();

container.addEventListener("click", onClick);

function onClick(evt) {
    const {target }= evt;
    if (!target.classList.contains('js-item') || target.textContent) {
        return;
    }

    const id = Number(target.dataset.id);
    let result = false;
    const isEndGame = historyX.length + historyO.length === 9;

    if(player === "X"){
        historyX.push(id)
        result = isWinner(historyX)
    } else {
        historyO.push(id)
        result = isWinner(historyO)
    }
    target.textContent = player;
    if (result) {
        nameWiner.textContent=`Вітаємо! Гравець ${player} переміг!`
        resetGame();
        return;
    }
    else if (isEndGame) {
        nameWiner.textContent=`Спробуйте знову.`;
        resetGame()
        return;
    }
    player = player === "X" ? "0": "X";
    console.log(isWinner(historyX));
}
function isWinner(arr) {
    return wins.some((item)=>item.every((id)=>arr.includes(id)))
}
function resetGame() {
    createMarkup ();
    historyX=[];
    historyO=[];
    player === "X";
}