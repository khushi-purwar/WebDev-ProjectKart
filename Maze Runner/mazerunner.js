const directions = {
    UP: 'up',
    LEFT: 'left',
    RIGHT: 'right',
    DOWN: 'down'
}

const colValues = {
    WALL: 't',
    OPEN: 'f',
    PATH: 'fp',
    DEADEND: 'fx'
}

//Setup the start and exits square
var startRow = 0;
var startCol = 0;
var exitRow = 3;
var exitCol = 0;


//with a known start and exit get to the exit 
//with the least amount of steps
function solveMaze() {

    let grid = cGrid;
    var curRow = 0;
    var curCol = 0;
    var prevRow = 0;
    var prevCol = 0;
    var stepCount = 0;
    var exitReached = false;
    var noExit = false;
    var minDistance = -1;
    var nextDirection;
    var moveUp = {};
    var moveLeft = {};
    var moveRight = {};
    var moveDown = {};

    //Mark the start as part of the path
    grid[startRow][startCol] = colValues.PATH;
    var elementID = `${startRow}:${startCol}`;
    document.getElementById(elementID).setAttribute("blockValue", "step");

    //solve the maze by lookig for the next best step
    do {

        let nextStep = [];
        let prevRow = curRow;
        let prevCol = curCol;

        moveUp = move(curRow, curCol, grid, directions.UP);
        if (moveUp.canMove == true) {
            nextStep.push(moveUp);
        }

        moveDown = move(curRow, curCol, grid, directions.DOWN);
        if (moveDown.canMove == true) {
            nextStep.push(moveDown);
        }

        moveLeft = move(curRow, curCol, grid, directions.LEFT);
        if (moveLeft.canMove == true) {
            nextStep.push(moveLeft);
        }

        moveRight = move(curRow, curCol, grid, directions.RIGHT);
        if (moveRight.canMove == true) {
            nextStep.push(moveRight);
        }

        //if we have no where to go exit
        if (nextStep.length == 0) {
            noExit = true;
            break;
        }

        //sort nextstep by min distance
        nextStep.sort((a, b) => (a.minDistance - b.minDistance));

        //pick the element that is closest to the exit. Pick Up or Down first. 
        switch (nextStep[0].direction) {
            case directions.UP:
                //move up and add to step count                
                stepCount++;
                curRow = curRow + 1;
                break;
            case directions.DOWN:
                //Move Down and add to step count
                stepCount++;
                curRow = curRow - 1;
                break;
            case directions.LEFT:
                //Move left and add to step count
                stepCount++;
                curCol = curCol - 1;
                break;
            case directions.RIGHT:
                //Move right and add to step count
                stepCount++;
                curCol = curCol + 1;
                break;

        }
        //mark the sqaures on the page
        exitReached = markElements(curRow, curCol, prevRow, prevCol, grid);
    }
    while (exitReached == false || noExit == true);
    if (exitReached == true) {
        document.getElementById("results").innerHTML = `Success! It took ${stepCount} step(s)`
    }
}

//solve the zero hour mazes. Just find the start and run to the exit.
function solveMazeZH() {

    let grid = cGrid;
    var curRow = 0;
    var curCol = 0;
    var prevRow = 0;
    var prevCol = 0;
    var stepCount = 0;
    var exitReached = false;
    var noExit = false;
    var minDistance = -1;
    var nextDirection;
    var moveUp = {};
    var moveLeft = {};
    var moveRight = {};
    var moveDown = {};


    //find the start column. We know it is on row 0.
    exitRow = grid.length - 1;
    startRow = 0;
    startCol = grid[startRow].findIndex(isPath);

    curCol = startCol;
    curRow = startRow;

    //Mark the start as part of the path
    grid[startRow][startCol] = colValues.PATH;
    var elementID = `${startRow}:${startCol}`;
    document.getElementById(elementID).setAttribute("blockValue", "step");

    //solve the maze by looking for the next best step
    do {

        let nextStep = [];
        let prevRow = curRow;
        let prevCol = curCol;

        moveUp = moveZH(curRow, curCol, grid, directions.UP);
        if (moveUp.canMove == true) {
            nextStep.push(moveUp);
        }

        moveDown = moveZH(curRow, curCol, grid, directions.DOWN);
        if (moveDown.canMove == true) {
            nextStep.push(moveDown);
        }

        moveLeft = moveZH(curRow, curCol, grid, directions.LEFT);
        if (moveLeft.canMove == true) {
            nextStep.push(moveLeft);
        }

        moveRight = moveZH(curRow, curCol, grid, directions.RIGHT);
        if (moveRight.canMove == true) {
            nextStep.push(moveRight);
        }

        //if we have no where to go exit
        if (nextStep.length == 0) {
            noExit = true;
            break;
        }

        //sort nextstep by target value
        nextStep.sort(function (a, b) {
            if (a.colValue > b.colValue) {
                return 1;
            }
            if (a.colValue < b.colValue) {
                return -1;
            }
            return 0;
        });

        //pick the element that is closest to the exit. Pick Up or Down first. 
        switch (nextStep[0].direction) {
            case directions.UP:
                //move up and add to step count                
                stepCount++;
                curRow = curRow + 1;
                break;
            case directions.DOWN:
                //Move Down and add to step count
                stepCount++;
                curRow = curRow - 1;
                break;
            case directions.LEFT:
                //Move left and add to step count
                stepCount++;
                curCol = curCol - 1;
                break;
            case directions.RIGHT:
                //Move right and add to step count
                stepCount++;
                curCol = curCol + 1;
                break;

        }
        //mark the sqaures on the page
        if (curRow == exitRow) {
            exitCol = curCol;
        }

        exitReached = markElements(curRow, curCol, prevRow, prevCol, grid);
    }
    while (exitReached == false || noExit == true);
    if (exitReached == true) {
        document.getElementById("results").innerHTML = `Success! It took ${stepCount} step(s)`
    }

}

//see if we can move to the next sqaure and 
//calculate the distance to the exit
function move(curRow, curCol, grid, direction) {

    var targetRow = curRow;
    var targetCol = curCol;
    var targetVal = "";
    var canMove = false;
    var minDistance = -1;

    switch (direction) {
        case directions.UP:
            targetRow = curRow + 1;
            break;
        case directions.LEFT:
            targetCol = curCol - 1;
            break;
        case directions.RIGHT:
            targetCol = curCol + 1;
            break;
        case directions.DOWN:
            targetRow = curRow - 1;
            break;
    }

    //check for out bounds
    if (targetRow > grid.length - 1 || targetRow < 0 || targetCol > grid[targetRow].length || targetCol < 0) {
        return {
            canMove: false,
            minDistance: -1,
            direction: direction,
            colValue: colValues.WALL
        };
    }

    //get the value of the square we are trying to move to
    targetVal = grid[targetRow][targetCol];


    if (targetRow == startRow && targetCol == startCol) {
        //we cannot move back to start.
        return {
            canMove: false,
            minDistance: -1,
            direction: direction,
            colValue: colValues.WALL
        };

    } else if (targetVal == colValues.OPEN) {
        //test if we can move to the target square.'f' means no wall
        //calculate the distance to the exit
        return {
            canMove: true,
            minDistance: GetMinDistance(targetRow, targetCol),
            direction: direction,
            colValue: targetVal
        };

    } else if (targetVal == colValues.WALL || targetVal == colValues.DEADEND) {
        //test for a wall or deadend; 't' means wall, 'fx' means deadend
        return {
            canMove: false,
            minDistance: -1,
            direction: direction,
            colValue: targetVal
        };
    } else if (targetVal == colValues.PATH) {
        //if you have to go backwards to a previous marked square 
        //we need to mark the current square as a dead end ('fx')
        //'fp' means square has already been marked        
        return {
            canMove: true,
            minDistance: GetMinDistance(targetRow, targetCol),
            direction: direction,
            colValue: targetVal
        };
    }

    return {
        canMove: false,
        minDistance: -1,
        direction: direction,
        colValue: colValues.WALL
    };
}

function moveZH(curRow, curCol, grid, direction) {

    var targetRow = curRow;
    var targetCol = curCol;
    var targetVal = "";
    var canMove = false;
    var minDistance = -1;

    switch (direction) {
        case directions.UP:
            targetRow = curRow + 1;
            break;
        case directions.LEFT:
            targetCol = curCol - 1;
            break;
        case directions.RIGHT:
            targetCol = curCol + 1;
            break;
        case directions.DOWN:
            targetRow = curRow - 1;
            break;
    }

    //check for out bounds
    if (targetRow > grid.length - 1 || targetRow < 0 || targetCol > grid[targetRow].length || targetCol < 0) {
        return {
            canMove: false,
            minDistance: -1,
            direction: direction,
            colValue: colValues.WALL
        };
    }

    //get the value of the square we are trying to move to
    targetVal = grid[targetRow][targetCol];


    if (targetRow == startRow && targetCol == startCol) {
        //we cannot move back to start.
        return {
            canMove: false,
            minDistance: -1,
            direction: direction,
            colValue: colValues.WALL
        };

    } else if (targetVal == colValues.OPEN) {
        //test if we can move to the target square.'f' means no wall
        //calculate the distance to the exit
        return {
            canMove: true,
            minDistance: -1,
            direction: direction,
            colValue: targetVal
        };

    } else if (targetVal == colValues.WALL || targetVal == colValues.DEADEND) {
        //test for a wall or deadend; 't' means wall, 'fx' means deadend
        return {
            canMove: false,
            minDistance: -1,
            direction: direction,
            colValue: targetVal
        };
    } else if (targetVal == colValues.PATH) {
        //if you have to go backwards to a previous marked square 
        //we need to mark the current square as a dead end ('fx')
        //'fp' means square has already been marked        
        return {
            canMove: true,
            minDistance: -1,
            direction: direction,
            colValue: targetVal
        };
    }

    return {
        canMove: false,
        minDistance: -1,
        direction: direction,
        colValue: colValues.WALL
    };
}
//gets the minDistance between target and exit
function GetMinDistance(targetRow, targetCol) {
    return Math.abs(exitRow - targetRow) + Math.abs((exitCol - targetCol));
}

//check if the target has been visited before. Mark it as a deadend.    
//mark the grid
function markElements(targetRow, targetCol, prevRow, prevCol, grid) {

    var elementID = "";

    if (grid[targetRow][targetCol] == colValues.PATH) {
        grid[prevRow][prevCol] = colValues.DEADEND;
        elementID = `${prevRow}:${prevCol}`;
        document.getElementById(elementID).setAttribute("blockValue", "deadend");
    }

    elementID = `${targetRow}:${targetCol}`;
    document.getElementById(elementID).setAttribute("blockValue", "step");
    grid[targetRow][targetCol] = colValues.PATH;


    //test for exit
    if (targetRow == exitRow && targetCol == exitCol) {
        return true;
    } else {
        return false;
    }

}
//test for path in the array
function isPath(element) {
    return element == "f";
}