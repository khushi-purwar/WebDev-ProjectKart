const grid1 = [
    ['f', 'f', 'f', 'f'],
    ['t', 't', 'f', 't'],
    ['f', 'f', 'f', 'f'],
    ['f', 'f', 'f', 'f']
];

const grid2 = [
    ['f', 'f', 'f', 'f', 'f'],
    ['t', 't', 'f', 't', 'f'],
    ['f', 'f', 'f', 'f', 'f'],
    ['f', 't', 'f', 'f', 'f']
];

const grid3 = [
    ['t', 'f', 't', 't', 't'],
    ['f', 'f', 't', 't', 't'],
    ['f', 't', 'f', 'f', 'f'],
    ['f', 'f', 'f', 't', 'f'],
    ['t', 't', 't', 'f', 'f'],
    ['t', 't', 't', 'f', 't']
];

const grid4 = [
    ['t', 't', 't', 't', 'f'],
    ['f', 'f', 'f', 't', 'f'],
    ['f', 't', 'f', 't', 'f'],
    ['f', 't', 'f', 't', 'f'],
    ['f', 't', 'f', 'f', 'f'],
    ['f', 't', 't', 't', 't']
];

const grid5 = [
    ['t', 'f', 't', 't', 't'],
    ['t', 'f', 'f', 'f', 'f'],
    ['t', 't', 't', 't', 'f'],
    ['f', 'f', 'f', 't', 'f'],
    ['f', 't', 'f', 'f', 'f'],
    ['f', 't', 't', 't', 't']
];

//will hold the current selected grid
var cGrid = [];

//render out column template with template literals experssions
//display grid based on the defined value
function displayGrid(grid, title) {

    //set the current grid. So that the solve method knows which one to solve. 
    cGrid = grid;
    document.getElementById("gridTitle").innerHTML = title;

    if (title.includes("void")) {
        document.getElementById("gridTitle").setAttribute("colorValue", "void");
    } else if (title.includes("arc")) {
        document.getElementById("gridTitle").setAttribute("colorValue", "arc");
    } else if (title.includes("solar")) {
        document.getElementById("gridTitle").setAttribute("colorValue", "solar");
    } else {
        document.getElementById("gridTitle").setAttribute("colorValue", "default");
    }

    let resultsHTML = "";
    //loop throught the rows, Inverted the grid so that 0 would be on the bottom
    for (irow = cGrid.length - 1; irow >= 0; irow--) {

        let rowVal = "";
        let blockVal = "";
        let colVal = "";
        let name = "";
        //loop through the columns. Reset the columns values if selected before        
        for (icol = 0; icol < cGrid[irow].length; icol++) {
            blockVal = cGrid[irow][icol];
            switch (cGrid[irow][icol].toLowerCase()) {
                case "t":
                    blockVal = "wall"
                    break;
                case "f":
                    blockVal = "path"
                    break;
                case "fp":
                    blockVal = "path"
                    cGrid[irow][icol] = "f"
                    break;
                case "fx":
                    blockVal = "path"
                    cGrid[irow][icol] = "f"
                    break;
            }

            colVal = cGrid[irow][icol];
            name = `${irow}:${icol}`;
            rowVal += renderColumn(colVal, blockVal, name);
        }
        resultsHTML += renderRow(rowVal);
    }
    document.getElementById("gridDisplay").innerHTML = resultsHTML;

}

//template function to render grid colums
function renderColumn(colVal, blockVal, name) {
    return `<td id="${name}" blockValue = "${blockVal}" class="gridStyle">
                ${colVal}
             </td>`
}

//render out row template with template literals experssions
function renderRow(rowVal) {
    return `<tr h-100>
                ${rowVal}
            </tr>`
}