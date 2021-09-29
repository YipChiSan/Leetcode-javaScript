/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return modifiedSearch(0, nums.length - 1, nums, target);
};

var modifiedSearch = function(l, h, nums, target) {
    let mid = Math.floor((l+h) / 2);
    if (l > h) {
        return -1;
    }
    
    if (nums[mid] == target) {
        return mid;
    }
    
    //If nums[l..mid] is sorted
    if (nums[l] <= nums[mid]) {
        if (target < nums[mid] && target >= nums[l] ) {
            return modifiedSearch(l, mid, nums, target);
        } else {
            return modifiedSearch(mid+1, h, nums, target);
        }
    }
    
    if (target >= nums[mid + 1] && target <= nums[h]) {
        return modifiedSearch(mid + 1, h, nums, target);
    } else {
        return modifiedSearch(l, mid, nums, target);
    }
}
