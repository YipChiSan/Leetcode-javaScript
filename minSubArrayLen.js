/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let result = Number.MAX_VALUE;
    let left = 0;
    let currSum = 0
    
    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];
        
        while (currSum >= target) {
            result = Math.min(result, i - left + 1);
            currSum -= nums[left];
            left++;
        }
        
    }
    console.log(currSum);
    return (result != Number.MAX_VALUE) ? result : 0;
};
