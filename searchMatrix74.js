/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let start = 0;
    let end = matrix.length * matrix[0].length - 1;
    
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        
     
   
        let temp = matrix[Math.floor(mid / matrix[0].length)][mid % matrix[0].length];
        if (temp == target) {
            return true;
        }
        
        if (temp < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    
    return false;
};
