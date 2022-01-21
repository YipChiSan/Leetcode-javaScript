/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let isColZero = false;
    let isRowZero = false;
    
    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] == 0) {
            isRowZero = true;
            break;
        }
    }
    
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] == 0) {
            isColZero = true;
            break;
        }
    }
    
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
        }
        }
    }
    
    for (let i = 1; i < matrix[0].length; i++) {
        if (matrix[0][i] == 0) {
            for (let j = 1; j < matrix.length; j++) {
                matrix[j][i] = 0;
            }
        }
    }
    
    for (let i = 1; i < matrix.length; i++) {
        if (matrix[i][0] == 0) {
            for (let j = 1; j < matrix[0].length; j++) {
                matrix[i][j] = 0;
            }            
        }

    }
    
    if (isColZero) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0;
        }
    }
    
    if (isRowZero) {
        for (let i = 0; i < matrix[0].length; i++) {
            matrix[0][i] = 0;
        }
    }
   
    return matrix;
};
