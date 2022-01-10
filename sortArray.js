/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    quickSort(nums, 0, nums.length - 1);
    return nums;
};

var quickSort = function(nums, left, right) {
    if (left >= right) {
        return;
    } else {
        let mid = partition(nums, left, right);
        
        quickSort(nums, left, mid - 1);
        quickSort(nums, mid + 1, right);
    }
}

var partition = function(nums, left, right) {
    let i = left - 1;
    let pivot = nums[right];
    let temp;
    for (let j = left; j < right; j++) {
        
        if (nums[j] <= pivot) {
            i++;
            temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
        }
    }
    
    i++;
    nums[right] = nums[i];
    nums[i] = pivot;
    
    return i;
    
}
