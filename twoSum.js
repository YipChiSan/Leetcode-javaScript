/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const result = [];
    const dict = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in dict) {
            dict[nums[i]].push(i);
        } else {
            dict[nums[i]] = [i]; 
        }
    }
    
    for (let j = 0; j < nums.length; j++) {
        const remainder = target - nums[j];
        if (remainder in dict) {
            if (dict[remainder].length === 1){
                result[0] = dict[remainder][0];
                result[1] = j;
            } else {
                return dict[remainder];
            }
        }
    }
    return result;
};
