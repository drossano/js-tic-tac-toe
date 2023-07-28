const gameBoard = (() => {
  const boardArray = ["", "", "", "", "", "", "", "", ""];
  const board = document.getElementById("board");
  const spaces = document.querySelectorAll("div.space");
  const displayBoard = () => {
    spaces.forEach((space, currentIndex) => {
      space.textContent = boardArray[currentIndex];
    });
  };
  const placeMarker = (index, marker) => {
    if (boardArray[index] === "") {
      boardArray[index] = marker;
    } else {
      return;
    }
    displayBoard();
  };
  const clickSpace = (player) => {
    spaces.forEach((space, currentIndex) => {
      space.addEventListener("click", () => {
        placeMarker(currentIndex, player.getMarker());
      });
    });
  };
  return {
    boardArray,
    displayBoard,
    placeMarker,
    clickSpace,
  };
})();

const Player = (name, marker) => {
  const getName = () => name;
  const getMarker = () => marker;
  return { getName, getMarker };
};

const gameController = (() => {})();
const playerX = Player("Dean", "X");
gameBoard.clickSpace(playerX);
