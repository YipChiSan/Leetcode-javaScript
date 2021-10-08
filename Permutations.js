/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [];
    
    if (nums.length == 1) {
        return [JSON.parse(JSON.stringify(nums))];
    } else {
        for (let i = 0; i < nums.length; i++) {
            let firstElement = nums.shift();
            let perms = permute(nums);
            for (let j = 0; j < perms.length; j++) {
                perms[j].push(firstElement);
                result.push(perms[j]);
            }
            nums.push(firstElement);
        }
        return result;
    }
};
