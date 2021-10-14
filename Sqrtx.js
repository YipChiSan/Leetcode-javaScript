/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0;
    let right = x;
    let result = 0;
    let mid;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (mid * mid == x) {
            return mid;
        } else if (mid * mid > x) {
            right = mid - 1;
        } else {
            result = mid;
            left = mid + 1;
        }
    }
    
    return result;
};
