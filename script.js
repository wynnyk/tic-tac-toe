const gameBoard = (() => {
    var board = ["", "", "", "", "", "", "", "", ""];
            return {board};
})();

const createPlayer = (player, symbol) => {
    return {player, symbol,};
};

const player1 = createPlayer("Player X", "X");
const player2 = createPlayer("Player O", "O");
let squares = document.querySelectorAll('.square');
let message = document.querySelector('.message');
let restartButton = document.querySelector('.restart');
let symbol = document.querySelectorAll('.symbol');


const gameModule = (() => {
    let gameOver = false;
    let counter = 0;
  
    const handleClick = (index) => {
    if (gameOver == false) {
      if (gameBoard.board[index] === "") {
        console.log('Clicked on item at index:', index);
        if (counter === 0 || counter % 2 === 0) {
          message.textContent = "Player O's Turn";
          gameBoard.board[index] = "X";
          squares[index].classList.add('X');
          symbol[index].textContent = "X";
        } else {
          message.textContent = "Player X's Turn";
          gameBoard.board[index] = "O";
          squares[index].classList.add('O');
          symbol[index].textContent = "O";
        }
        console.log(gameBoard.board);
        counter += 1;
        checkWinner();
        checkTie();
      }
    }};
  
    squares.forEach((item, index) => {
      item.addEventListener('click', () => {
        handleClick(index);
      });
    });
  
    const checkWinner = () => {
      const winningCombos = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 4, 8],
      [2, 4, 6],[0, 3, 6],[1, 4, 7],[2, 5, 8]];
      for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (
          gameBoard.board[a] !== "" &&
          gameBoard.board[a] === gameBoard.board[b] &&
          gameBoard.board[b] === gameBoard.board[c]
        ) {
          console.log("Player " + gameBoard.board[a] + " is the winner!");
          message.textContent = "Player " + gameBoard.board[a] + " is the winner!";
          gameOver = true;
        }
      }
    };

    const checkTie = () => {
        if (!gameBoard.board.includes("") && gameOver == false) {
            message.textContent = "It's a tie!"
        }
    };

    const restartGame = () => {
        gameBoard.board = ["", "", "", "", "", "", "", "", ""];
        squares.forEach((square) => {
          square.classList.remove('X');
          square.classList.remove('O');
        });
        symbol.forEach((symbol) => {
            symbol.textContent = "";
          });
        message.textContent = "Player X's Turn";
        gameOver = false;
        counter = 0;
      };
    
      restartButton.addEventListener('click', restartGame);

  })();