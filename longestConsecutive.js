/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    
    
    let set = new Set();
    
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    }
    
    let result = 0;
    let temp;
    for (let num of set) {
        
        if (!set.has(num - 1)) {
            temp = 0;
            let curr = num;
            while (set.has(curr)) {
                temp++;
                curr++;
            }
            
            result = Math.max(result, temp);
        }
    }
    
    return result;
};
