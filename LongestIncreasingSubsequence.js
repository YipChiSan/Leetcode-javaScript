/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let lastIndex;
    let indexOfNum;
    let listArr = [null];
    for (let i = 1; i <= nums.length; i++) {
        lastIndex = listArr.length;
        indexOfNum = binarySearch(1, listArr.length - 1, nums, listArr, nums[i - 1]);
       
        if (indexOfNum >= listArr.length) {
            listArr.push(i-1);
            
        } else {
            listArr[indexOfNum] = i - 1;
        }
    }
    
    return listArr.length - 1;
};

var binarySearch = function(l, r, nums, listArr, target) {
    if (l > r) {
        return l;
    } else {
        let mid = Math.floor((l + r) / 2);
        if (nums[listArr[mid]] > target ) {
            if (mid - 1 > 0 && nums[listArr[mid - 1]] < target) {
                return mid;
            } else {
                return binarySearch(l, mid - 1, nums, listArr, target);
            }
        } else if (nums[listArr[mid]] < target) {
            if (mid + 1 < listArr.length && nums[listArr[mid + 1]] > target) {
                return mid + 1;
            } else {
                return binarySearch(mid + 1, r, nums, listArr, target);
            }
        } else {
            return mid;
        }
    }
}
