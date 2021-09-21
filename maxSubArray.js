/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArrayLinear = function(nums) {
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

var maxCrossingSum = function(nums, l, m, r) {
    let sum = 0;
    let leftSum = Number.NEGATIVE_INFINITY;
    let rightSum = Number.NEGATIVE_INFINITY;
    for (let i = m; i > -1; i--) {
        sum += nums[i];
        
        if(sum > leftSum) {
            leftSum = sum;
        }
    }
    sum = 0;
    for (let i = m + 1; i < nums.length; i++) {
        sum += nums[i];
        
        if(sum > rightSum) {
            rightSum = sum;
        }
    }
    
    return Math.max(leftSum + rightSum, leftSum, rightSum);
}

var maxSubArrayRecur = function(nums, l, r) {
    if(l == r) {
        return nums[l];
    }
    
    let m = Math.floor((l + r) / 2);
    return Math.max(maxSubArrayRecur(nums, l, m),
                    maxSubArrayRecur(nums, m + 1, r),
                    maxCrossingSum(nums, l, m, r));
    
}

var maxSubArray = function(nums) {
    return maxSubArrayRecur(nums, 0, nums.length - 1);
}
