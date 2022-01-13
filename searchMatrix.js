/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrixTwoPointer = function(matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;
    
    while (row < matrix.length && col >= 0) {
        let curr = matrix[row][col];
        
        if (curr == target) {
            return true;
        }
        
        if (curr > target) {
            col--;
        } else {
            row++;
        }
    }
    
    return false;
};

var searchMatrix = function(matrix, target) {
    const m = matrix.length,
          n = matrix[0].length;
    
	// starting from top row right-most element, check if target is less than the element
	// if yes, use binary search to check if the target lies in the array

	// O(m)
    for(let i = 0, j = n - 1; i < m; ++i) {
        if(matrix[i][j] === target || (matrix[i][j] > target && binarySearch(matrix[i], target))) {
            return true;
        }
    }
    return false;
};

// O(logn)
function binarySearch(arr, target) {
    let start = 0,
        end = arr.length - 1,
        mid;
    
    while(start <= end) {
        mid = Math.floor(start + (end - start) / 2);
        if(arr[mid] === target) {
            return true;
        } else if(arr[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return false;
}
