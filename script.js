const gameBoard = (() => {
  const boardArray = ["", "", "", "", "", "", "", "", ""];
  const spaces = document.querySelectorAll("div.space");
  const getSpaces = spaces;
  const displayBoard = () => {
    spaces.forEach((space, currentIndex) => {
      space.textContent = boardArray[currentIndex];
    });
  };
  return {
    getSpaces,
    boardArray,
    displayBoard,
  };
})();

const Player = (name, marker) => {
  const getName = () => name;
  const getMarker = () => marker;
  const placeMarker = (index) => {
    gameBoard.boardArray[index] = marker;

    gameBoard.displayBoard();
  };
  return { getName, getMarker, placeMarker };
};

const gameController = (() => {
  const players = [Player("Dean", "X"), Player("Bob", "O")];
  let currentPlayer = players[0];
  const changePlayer = () => {
    if (currentPlayer === players[0]) {
      currentPlayer = players[1];
    } else {
      currentPlayer = players[0];
    }
  };
  const clickSpace = () => {
    gameBoard.getSpaces.forEach((space, spaceIndex) => {
      space.addEventListener("click", () => {
        if (gameBoard.boardArray[spaceIndex] == "") {
          takeTurn(spaceIndex);
        }
      });
    });
  };
  const takeTurn = (space) => {
    currentPlayer.placeMarker(space);

    changePlayer();
  };

  return { clickSpace };
})();
gameController.clickSpace();
