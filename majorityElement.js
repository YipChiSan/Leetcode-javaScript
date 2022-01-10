/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let result;
    let count = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (count == 0) {
            result = nums[i];
        } 
        count += (result == nums[i]) ? 1 : -1;
    }
    
    return result;
};
