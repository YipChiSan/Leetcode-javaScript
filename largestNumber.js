/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort(compareFn);
    let result = "";
    for (let i = 0; i < nums.length; i++) {
        if (result.length != 0 || nums[i] != "0") {
            result += nums[i];
        }
    }
    
    if (result.length == 0) {
        result = "0";
    }
    return result;
};

var compareFn = function compareFunc(numStr1, numStr2) {
        let combinedNumStr1 = numStr1 + "" + numStr2;
        let combinedNumStr2 = numStr2 + "" + numStr1;
        
        return combinedNumStr2 - combinedNumStr1;
}
