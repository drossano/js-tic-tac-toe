const gameBoard = (() => {
  const boardArray = ["", "", "", "", "", "", "", "", ""];
  const horizontals = [
    [boardArray[0], boardArray[1], boardArray[2]],
    [boardArray[3], boardArray[4], boardArray[5]],
    [boardArray[6], boardArray[7], boardArray[8]],
  ];
  const verticals = [
    [boardArray[0], boardArray[3], boardArray[6]],
    [boardArray[1], boardArray[4], boardArray[7]],
    [boardArray[2], boardArray[5], boardArray[9]],
  ];
  const diagonals = [
    [boardArray[0], boardArray[4], boardArray[8]],
    [boardArray[2], boardArray[4], boardArray[6]],
  ];
  const spaces = document.querySelectorAll("div.space");
  const getHorizontals = horizontals;
  const getVerticals = verticals;
  const getDiagonals = diagonals;
  const getSpaces = spaces;
  const displayBoard = () => {
    spaces.forEach((space, currentIndex) => {
      space.textContent = boardArray[currentIndex];
    });
  };
  return {
    getSpaces,
    getHorizontals,
    getVerticals,
    getDiagonals,
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
  return {
    getName,
    getMarker,
    placeMarker,
  };
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
  const takeTurn = (space) => {
    currentPlayer.placeMarker(space);
    checkForWin(currentPlayer.getMarker());
    checkForTie();
    changePlayer();
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

  const winner = (checkLines, marker) =>
    checkLines.some((line) => line.every((space) => space === marker));

  const checkForWin = (marker) => {
    const horizontals = [
      [
        gameBoard.boardArray[0],
        gameBoard.boardArray[1],
        gameBoard.boardArray[2],
      ],
      [
        gameBoard.boardArray[3],
        gameBoard.boardArray[4],
        gameBoard.boardArray[5],
      ],
      [
        gameBoard.boardArray[6],
        gameBoard.boardArray[7],
        gameBoard.boardArray[8],
      ],
    ];

    const verticals = [
      [
        gameBoard.boardArray[0],
        gameBoard.boardArray[3],
        gameBoard.boardArray[6],
      ],
      [
        gameBoard.boardArray[1],
        gameBoard.boardArray[4],
        gameBoard.boardArray[7],
      ],
      [
        gameBoard.boardArray[2],
        gameBoard.boardArray[5],
        gameBoard.boardArray[8],
      ],
    ];

    const diagonals = [
      [
        gameBoard.boardArray[0],
        gameBoard.boardArray[4],
        gameBoard.boardArray[8],
      ],
      [
        gameBoard.boardArray[2],
        gameBoard.boardArray[4],
        gameBoard.boardArray[6],
      ],
    ];

    const winLines = [].concat(horizontals, verticals, diagonals);
    winner(winLines, marker);
  };

  const checkForTie = () => !gameBoard.boardArray.some((space) => space === "");
  return { clickSpace };
})();
gameController.clickSpace();
