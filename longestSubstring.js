/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    return helper(s, k, 0, s.length - 1);
    }

var helper = function(s, k, start, end) {
    
    if (end < start || end - start + 1< k) {
        return 0;
    }
    
    if (k == 1) {
        return end - start + 1;
    }
    
    let countMap = new Map();
    
    for (let i = start; i <= end; i++) {
        let freq = countMap.get(s.charAt(i));
        if (freq != undefined) {
            freq += 1;
        } else {
            freq = 1;
        }
        
        countMap.set(s.charAt(i), freq);
    }
    
    let longestSubStringIndex = start;
    while (longestSubStringIndex <= end && countMap.get(s.charAt(longestSubStringIndex)) >= k) {
        longestSubStringIndex++;
    }
    
    if (longestSubStringIndex > end) {
        return end - start + 1;
    }
    
    return Math.max(helper(s, k, start, longestSubStringIndex - 1), helper(s, k, longestSubStringIndex + 1, end))
};
