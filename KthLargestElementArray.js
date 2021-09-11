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

var isLeaf = function(nums, index) {
    return (2 * index + 1) >= nums.length;     
}

var heapifyOneStep = function(nums, i) {
    let temp = nums[i];
    if (nums[2 * i + 1] < nums[i] || nums[2 * i + 2] < nums[i]) {
        
        if (nums[2 * i + 1] < nums[2 * i + 2] || (2*i+2)>nums.length-1) {
            
            nums[i] = nums[2 * i + 1];
            nums[2 * i + 1] = temp;
            return 2 * i + 1;
            } else if (nums[2 * i + 1] >= nums[2 * i + 2]) {
                nums[i] = nums[2 * i + 2];
                nums[2 * i + 2] = temp;
                return 2 * i + 2;
            }
        }
    return null; //No need to heapify
}

var heapify = function(nums, i) {
    result = heapifyOneStep(nums, i);
    while (result !== null) {
        result = heapifyOneStep(nums, result);
    }
}

/**
  *Assume it is a min-heap
*/
var heapifyConstruct = function(nums) {
    for (let i = nums.length - 1; i > -1; i--) {
        if (!isLeaf(nums,i)) {
            heapify(nums, i);
        }
    }
}

var heapifyReplace = function(nums, value) {
    nums[0] = value;
    if (!isLeaf(nums, 0)){
        heapify(nums, 0);
    }
}

var findKthLargestHeap = function(nums, k) {
    let tempHeap = nums.slice(0, k);
    heapifyConstruct(tempHeap);
    for (let i = k; i < nums.length; i++) {
        if (nums[i] > tempHeap[0]) {
            heapifyReplace(tempHeap, nums[i]);
        }
    }
    return tempHeap[0];
}
