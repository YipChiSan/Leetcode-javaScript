/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (n == 0) {
        return nums1;
    }

    
    let tailPointer2 = n - 1;
    let tailPointer1 = nums1.length - 1;
    let numPointer1 = m - 1;
    
    while (tailPointer2 >= 0 && numPointer1 >= 0) {
        if(nums1[numPointer1] <= nums2[tailPointer2]) {
            nums1[tailPointer1] = nums2[tailPointer2];
            tailPointer1--;
            tailPointer2--;
        } else {
            nums1[tailPointer1] = nums1[numPointer1]
            numPointer1--;
            tailPointer1--;
        }
    }
    
    if (tailPointer2 < 0) {
        return nums1;
    } else {
        for (let i = 0; i <= tailPointer2; i++) {
            nums1[i] = nums2[i]; 
        }
    return nums1;
    }
    
    
};
