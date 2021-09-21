/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                dfs(grid, i, j);
                count++;
            }
        }
    }
    
    return count;
};

var dfs = function(grid, x, y) {
    
    if( x < 0 ||
        y < 0 ||
        x >= grid.length ||
        y >= grid[0].length ||
        grid[x][y] != "1") {
        return
    }
    
    grid[x][y] = "-1";
    
    dfs(grid, x - 1, y);
    dfs(grid, x + 1, y);
    dfs(grid, x, y - 1);
    dfs(grid, x, y + 1);
}
