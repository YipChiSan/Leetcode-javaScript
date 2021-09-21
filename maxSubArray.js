/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSum = Number.NEGATIVE_INFINITY;
    let sumToHere = 0;
    for (let i = 0; i < nums.length; i++) {
        sumToHere += nums[i];
        if (sumToHere <= 0) {
            sumToHere = 0;
        }
        if(maxSum < sumToHere) {
            maxSum = sumToHere;
        }
    }
    if (maxSum == 0) {
        maxSum = Math.max(...nums);
    }
    return maxSum;
};
