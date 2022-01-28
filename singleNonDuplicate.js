/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        
        if ((mid % 2 == 1 && nums[mid - 1] == nums[mid]) || (mid % 2 == 0 && nums[mid + 1] == nums[mid])) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    
    return nums[start];
};
