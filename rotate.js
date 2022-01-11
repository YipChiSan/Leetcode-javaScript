/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let r = matrix.length - 1;
    let l = 0;
    while (l < r) {
        for (let j = 0; j < r - l; j++) {
            let top = l;
            let bottom = r;
            
            let topLeft = matrix[top][l + j];
            
            matrix[top][l + j] = matrix[bottom - j][l];
            
            matrix[bottom - j][l] = matrix[bottom][r - j];
            
            matrix[bottom][r - j] = matrix[top + j][r];
            
            matrix[top + j][r] = topLeft;
        }
        
        r--;
        l++;
    }
    
};
