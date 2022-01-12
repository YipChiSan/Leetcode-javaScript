/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let result = 0;
    let visited = JSON.parse(JSON.stringify(grid));
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            
            result = Math.max(area(grid, visited, i, j), result);
        
        }
    }
    
    return result;
};

var area = function(grid, visited, x, y) {
    if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || visited[x][y] == -1) {
        return 0
    } else {
        visited[x][y] = -1;
        if (grid[x][y] == 0) {      
            return 0;
        } else {
            return 1 + area(grid, visited, x - 1, y) + area(grid, visited, x + 1, y) + area(grid, visited, x, y - 1) + area(grid, visited, x, y  + 1);
        }
        
    }
}
