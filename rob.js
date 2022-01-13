/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length == 1) {
        return nums[0];
    }
    
    if (nums.length == 2) {
        return Math.max(nums[0], nums[1]);
    }
    
    let r1 = nums[0];
    let r2 = nums[1];
    let result = Math.max(r1, r2);
    
    for (let i = 2; i < nums.length; i++) {
        let temp = r2;
        r2 = nums[i] + Math.max(r2 - nums[i - 1], r1);
        r1 = temp;
        
        result = Math.max(result, r2);
    }
    
    return result;
};
