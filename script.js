const gameBoard = (() => {
  const boardArray = ["", "", "", "", "", "", "", "", ""];
  const board = document.getElementById("board");
  const spaces = board.children;
  const displayBoard = () => {
    for (let i = 0; i < spaces.length; i += 1) {
      const space = spaces[i];
      space.textContent = boardArray[i];
    }
  };
  const placeMarker = (index, player) => {
    if (boardArray[index] === "") {
      boardArray[index] = player.playerMarker;
    } else {
      return;
    }
    displayBoard();
  };
  return { boardArray, displayBoard, placeMarker };
})();

const Player = (marker) => {
  const playerMarker = marker;
  return { playerMarker };
};

const gameController = (() => {})();
const playerX = Player("X");
gameBoard.placeMarker(8, playerX);
