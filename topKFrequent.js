/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let val = map.get(nums[i]);
            map.set(nums[i], val + 1);
        } else {
            map.set(nums[i], 1);
        }
    }
    
    nums = [...map.keys()];
    
    var partition = function(left, right, pivot) {
        let pivotFrequency = map.get(nums[pivot]);
        
        while (left < right) {
            if (map.get(nums[left]) < pivotFrequency) {
                [nums[left], nums[right]] = [nums[right], nums[left]];
                right--;
            } else {
                left++;
            }
        }
        
        if (map.get(nums[left]) > pivotFrequency) {
            left++;
        }
        
        return left;
    }
    
    var quickSelect = function() {
        
        let left = 0;
        let right = nums.length - 1;
        let pivot = nums.length;
        while(pivot != k) {
            
            pivot = partition(left, right, right);
            if (pivot < k) {
                left = pivot;
            } else {
                right = pivot - 1;
            }
        }
        
        return nums.slice(0, k);
    }
    
    return quickSelect();
};
