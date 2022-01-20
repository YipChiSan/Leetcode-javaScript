/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = new Map();
    
    for (let i = 0; i < nums1.length; i++) {
        if (map.has(nums1[i])) {
            let temp = map.get(nums1[i]);
            temp++;
            map.set(nums1[i], temp);
        } else {
            map.set(nums1[i], 1);    
        }
        
    }
    
    let result = [];
    
    for (let j = 0; j < nums2.length; j++) {
        if (map.has(nums2[j]) && map.get(nums2[j]) != 0) {
            result.push(nums2[j]);
            let temp = map.get(nums2[j]);
            temp--;
            map.set(nums2[j], temp);
        }
    }
    
    return result;
};
