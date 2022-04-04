import React, {useState} from "react";
import Cell from "./Cell";
import './Board.css';

/** Game board of Lights out.
 *
 * Properties:
 *
 * - nrows: number of rows of board
 * - ncols: number of cols of board
 * - chanceLightStartsOn: float, chance any cell is lit at start of game
 *
 * State:
 *
 * - hasWon: boolean, true when board is all off
 * - board: array-of-arrays of true/false
 *
 *    For this board:
 *       .  .  .
 *       O  O  .     (where . is off, and O is on)
 *       .  .  .
 *
 *    This would be: [[f, f, f], [t, t, f], [f, f, f]]
 *
 *  This should render an HTML table of individual <Cell /> components.
 *
 *  This doesn't handle any clicks --- clicks are on individual cells
 *
 **/

function Board(props) {
  // set board and copy after each click
  const [board,setBoard] = useState(createBoard())

  // win 
  const [won,sethasWon] = useState(false)

  // no of moves
  const [movesLeft,decrementMoves] = useState(36)
  function decrease(){
    decrementMoves (movesLeft => movesLeft-1);
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */
  function createBoard() {
    let board = [];
    for(let y=0;y<props.nrows;y++){
      let row=[]
      for(let x=0;x<props.ncols;x++){
        row[x]=(Math.random()<props.chanceLightStartsOn); 
      }
      board.push(row)
    }
    return board
  }

  /** handle changing a cell: update board & determine if winner */

  function flipCellsAround(coord) {
    let {ncols, nrows} = props;
    let newBoard = board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        newBoard[y][x] = !newBoard[y][x];
      }
    }

    // flip this cell and the cells around it

    flipCell(y,x)
    flipCell(y,x+1);
    flipCell(y,x-1);
    flipCell(y+1,x);
    flipCell(y-1,x);

    //no. of tries left
    decrease();

    // win when every cell is turned off
    let won = board.every(row => row.every(cell => !cell));
    sethasWon(won);

    // display board after every click
    setBoard(newBoard);
  }

  // make table board : rows of cell component
  function renderCells(){
    let tableBoard = [];
    for (let y = 0; y < props.nrows; y++) {
      let row = [];
      for (let x = 0; x < props.ncols; x++) {
        let coord = `${y}-${x}`;
        row.push(
          <Cell
            key={coord}
            isLit={board[y][x]}
            flipCellsAroundMe={() => flipCellsAround(coord)}
          />
        );
      }
      tableBoard.push(<tr key={y}>{row}</tr>);
    }
    return tableBoard; 
  }
  
  /** Render game board or winning message. */
  return (
    // if the game is won, just show a winning msg along with the leaderboard
    <div>
    {
      won
      ? (<div className="winner">
        <span className="neon-orange">YOU</span>
        <span className="neon-blue">WIN!</span>
        </div>)
      : movesLeft>0
        ? (<div>
          <div className="Board-title">
            <div className="neon-orange">Lights</div>
            <div className="neon-blue">Out</div>
          </div>
          <table className="Board">
          {renderCells()}
          </table>
          <br />
          <div className="neon-Blue">Moves Left: {movesLeft}</div>
          </div>)
        : (<div className="winner">
          <span className="neon-orange">YOU</span>
          <span className="neon-blue">LOST:(</span>
          </div>)
    }
    </div>
  );
}

export default Board;