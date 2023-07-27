const gameBoard = (() => {
  const boardArray = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
  const displayBoard = () => {
    const board = document.getElementById("board");
    const spaces = board.children;
    for (let i = 0; i < spaces.length; i++) {
      const space = spaces[i];
      space.textContent = boardArray[i];
    }
  };
  return { boardArray, displayBoard };
})();

const Player = (marker) => {};

const gameController = (() => {})();
gameBoard.displayBoard();
