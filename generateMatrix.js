/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push([]);
    }
    
    let dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let d = 0;
    let row = 0;
    let col = 0;
    for (let i = 1; i <= n * n; i++) {
        result[row][col] = i;
        
        if (row + dir[d][0] < 0 ||
            row + dir[d][0] == n ||
            col + dir[d][1] < 0 ||
            col + dir[d][1] == n ||
            result[row + dir[d][0]][col + dir[d][1]] != undefined) {
            d = (d + 1) % 4;
        }
        
        row += dir[d][0];
        col += dir[d][1];
    }
    
    return result;
    
    
};
