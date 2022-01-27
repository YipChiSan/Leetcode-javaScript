/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let maxQueue = [nums[0]];
    let minQueue = [nums[0]];
    let maxQueueHead = 0;
    let maxQueueTail = 0;
    let minQueueHead = 0;
    let minQueueTail = 0;
    
    let rightPointer = 1;
    let leftPointer = 0;
    let result = 1;
    
    while (leftPointer < nums.length && rightPointer < nums.length) {
        while (maxQueueTail - maxQueueHead >= 0 && maxQueue[maxQueueTail] < nums[rightPointer]) {
            maxQueueTail--;
        }
        
        
        
        maxQueueTail++;
        maxQueue[maxQueueTail] = nums[rightPointer];
        
        
        while (minQueueTail - minQueueHead >= 0 && minQueue[minQueueTail] > nums[rightPointer]) {
            minQueueTail--;
        }
        
        minQueueTail++;
        minQueue[minQueueTail] = nums[rightPointer];
        
        while (maxQueue[maxQueueHead] - minQueue[minQueueHead] > limit) {
            if (maxQueue[maxQueueHead] == nums[leftPointer]) {
                maxQueueHead++;
            }
            
            if (minQueue[minQueueHead] == nums[leftPointer]) {
                minQueueHead++;
            }
            
            leftPointer++;
        }
        
        result = Math.max(rightPointer - leftPointer + 1, result);
        
        if (rightPointer < nums.length - 1) {
            rightPointer++;
        } else {
            leftPointer++;
        }
    }
    
    return result;
};
