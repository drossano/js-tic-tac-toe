const gameBoard = (() => {
  const boardArray = ["", "", "", "", "", "", "", "", ""];
  const spaces = document.querySelectorAll("div.space");
  const displayBoard = () => {
    spaces.forEach((space, currentIndex) => {
      space.textContent = boardArray[currentIndex];
    });
  };
  const clickSpace = (currentPlayer) => {
    spaces.forEach((space, currentIndex) => {
      space.addEventListener("click", () => {
        currentPlayer.placeMarker(currentIndex, currentPlayer.getMarker());
      });
    });
  };
  return {
    boardArray,
    displayBoard,
    clickSpace,
  };
})();

const Player = (name, marker) => {
  const getName = () => name;
  const getMarker = () => marker;
  const placeMarker = (index) => {
    if (gameBoard.boardArray[index] === "") {
      gameBoard.boardArray[index] = marker;
    } else {
      return;
    }
    gameBoard.displayBoard();
  };
  return { getName, getMarker, placeMarker };
};

const gameController = (() => {

})();
const playerX = Player("Dean", "X");
const playerO = Player("Bob", "O");
gameBoard.clickSpace(playerX);
gameBoard.clickSpace(playerO);
