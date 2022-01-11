/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
    let subset = [];
    
    var helper = function(i) {
        if (i == nums.length) {
            res.push(JSON.parse(JSON.stringify(subset)));
            return;
        }
        
        subset.push(nums[i]);
        helper( i + 1);
        
        subset.pop();
        helper( i + 1);
    }
    
    helper(0);
    
    return res;
};
