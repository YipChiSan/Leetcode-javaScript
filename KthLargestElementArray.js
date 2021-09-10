/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var swap = function(i, j, nums) {
    let temp = nums[j];
    nums[j] = nums[i];
    nums[i] = temp;
}

var findKthLargestQuickSelect = function(nums, k) {

    let pivotIndex = nums.length - 1;
    let startingIndex = 0;
    let arrayhead = 0;
    let arrayend = nums.length - 1;
    while (pivotIndex - startingIndex + 1 >= k) {
        
        if(pivotIndex - startingIndex + 1 === k) {
            return Math.min(...nums.slice(startingIndex, pivotIndex + 1));
        }
       
        for (let i = arrayhead; i < pivotIndex; i++) {
            if (nums[i] >= nums[pivotIndex]) {
                swap(startingIndex, i, nums);
                startingIndex++;
            }
        }
        swap(startingIndex, pivotIndex, nums);
        

        if (startingIndex + 1 - arrayhead < k) {
            k -= (startingIndex + 1 - arrayhead);
            arrayhead = startingIndex + 1;
            pivotIndex = arrayend;   
        } else if (startingIndex - arrayhead + 1 > k) {
            pivotIndex = startingIndex - 1;
            arrayend = pivotIndex;
            }
        startingIndex = arrayhead;
        
        
    }
    
    return nums[pivotIndex];
};
