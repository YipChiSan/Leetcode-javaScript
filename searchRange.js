/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    
    var findStart = function() {
        let left = 0;
        let right = nums.length - 1;
        
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] >= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        
        return (nums[left] == target) ? left : -1;
    }
    
    var findEnd = function(startIndex) {
        let left = startIndex;
        let right = nums.length - 1;
        
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return right;
    }
    
    let start = findStart();
    if (start != -1) {
        let end = findEnd(start + 1);
        return [start,end];
    } else {
        return [-1, -1];
    }
    
};
