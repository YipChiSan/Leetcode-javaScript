/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    let left = 0;
    let right = mountainArr.length() - 1;
    let mid;
    let temp;
    
    //Find peak
    
    while (left < right) {
        mid = Math.floor((left + right) / 2);
        if (mountainArr.get(mid) <= mountainArr.get(mid + 1)) { //If in first half
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    let peak = left;
    
    let result;
    
    // Check whether the first half contains target
    
    left = 0;
    right = peak;
    
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        temp = mountainArr.get(mid);
        if (temp == target) {
            return mid;
        } else if (temp < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    // Check whether the second half contains target
    
    left = peak + 1;
    right = mountainArr.length() - 1;
    
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        temp = mountainArr.get(mid);
        if (temp == target) {
            return mid;
        } else if (temp < target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return -1;
};
