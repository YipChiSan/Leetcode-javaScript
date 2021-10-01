/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let result = [];
    let startingRow = 0;
    let endingRow = matrix.length - 1;
    let startingColumn = 0;
    let endingColumn = matrix[0].length - 1;
    while (startingRow <= endingRow && startingColumn <= endingColumn) {
        for (let i = startingColumn; i <= endingColumn; i++) {
            result.push(matrix[startingRow][i]);
        }
        startingRow++;
        
        if (!(startingRow <= endingRow && startingColumn <= endingColumn)) {
            break;
        }
        
        for (let i = startingRow; i <= endingRow; i++) {
            result.push(matrix[i][endingColumn]);
        }
        endingColumn--;
        
        if (!(startingRow <= endingRow && startingColumn <= endingColumn)) {
            break;
        }
        
        for (let i = endingColumn; i >= startingColumn; i--) {
            result.push(matrix[endingRow][i]);
        }
        endingRow--;

        if (!(startingRow <= endingRow && startingColumn <= endingColumn)) {
            break;
        }
        
        for (let i = endingRow; i >= startingRow; i--) {
            result.push(matrix[i][startingColumn]);
        }
        startingColumn++;
    }
    
    return result;
};
