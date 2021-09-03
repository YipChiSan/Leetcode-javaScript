/** Question: 26
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let pointer = 0;
    while (pointer < nums.length - 1) {
        if (nums[pointer] === nums[pointer + 1]) {
            nums.splice(pointer+1, 1);
        } else {
            pointer++;
        }
    }
};
