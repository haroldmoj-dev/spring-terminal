import { useState, useRef, useEffect } from "react";
import "../styles/components/TetrisPlay.css";

const TetrisPlay = ({ onNavigate, isLowPerf, hasI = true, hasL = true }) => {
  // Board dimensions
  const ROWS = 18;
  const COLS = 15;

  // Create empty board (2D array filled with 0s)
  const createEmptyBoard = () => {
    return Array(ROWS)
      .fill(null)
      .map(() => Array(COLS).fill(0));
  };

  const [board, setBoard] = useState(createEmptyBoard());

  // Current piece state (position and shape)
  const [currentPiece, setCurrentPiece] = useState({
    x: 6,
    y: 0,
    shape: [[1, 1, 1]],
  });

  // Display of board with piece
  const getBoardWithPiece = () => {
    const displayBoard = board.map((row) => [...row]);

    currentPiece.shape.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell) {
          const boardRow = currentPiece.y + rowIndex;
          const boardCol = currentPiece.x + colIndex;
          if (
            boardRow >= 0 &&
            boardRow < ROWS &&
            boardCol >= 0 &&
            boardCol < COLS
          ) {
            displayBoard[boardRow][boardCol] = 1;
          }
        }
      });
    });

    return displayBoard;
  };

  const displayBoard = getBoardWithPiece();

  return (
    <div className="tplay content">
      <div className="tetris-game">
        <div className="game-board">
          {displayBoard.map((row, rowIndex) => (
            <div key={rowIndex} className="board-row">
              {row.map((cell, colIndex) => (
                <div
                  key={colIndex}
                  className={`board-cell ${cell ? "filled" : "empty"}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TetrisPlay;
