/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let notDecreasingIndex = nums.length - 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            notDecreasingIndex = i;
           
            break;
        }
    }
    
    let smallestGreater;
    
    if (notDecreasingIndex != nums.length - 1) {
        smallestGreater = findSmallestGreater(nums, notDecreasingIndex + 1, nums.length - 1,                                          nums[notDecreasingIndex]);
        let temp = nums[notDecreasingIndex];
        nums[notDecreasingIndex] = nums[smallestGreater];
        
        nums[smallestGreater] = temp;
       
        let x = nums.slice(notDecreasingIndex + 1,).sort((a, b) => a - b);    
        nums.splice(notDecreasingIndex + 1, x.length, ...x);
    } else {
        nums.sort((a, b) => a - b);    
        
    }
    
    return nums;
    
};

var findSmallestGreater = function(nums, l, r, target) {
    if (l >= r) {
        return r;
    } else {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] > target) {
            if (nums[mid + 1] <= target) {
                return mid;
            }
            return findSmallestGreater(nums, mid + 1, r, target);
        } else if (nums[mid] <= target) {
            return findSmallestGreater(nums, l, mid - 1, target);
        } 
        }
    };
