/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n == 1) {
        return 1;
    }
    
    if (n == 2) {
        return 2;
    }
    
    let oneBefore = 2;
    let twoBefore = 1;
    let curr;
    
    for (let i = 3; i <= n; i++) {
        curr = oneBefore + twoBefore;
        twoBefore = oneBefore;
        oneBefore = curr;
    }
    
    return curr;
};
