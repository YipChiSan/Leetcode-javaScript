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

//Sliding Window

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    let result = 0;
    let uniqueFullStringMap = new Map();
    let left;
    let right;
    let windowMap;
    let uniqueNum;
    let atLeastKNum;
    for (let i = 0; i < s.length; i++) {
        let countFullMap = uniqueFullStringMap.get(s.charAt(i));
        if (countFullMap == undefined) {
            uniqueFullStringMap.set(s.charAt(i), 1);
        } else {
            countFullMap++;
            uniqueFullStringMap.set(s.charAt(i), countFullMap);
        }
    }
    
    let maxUnique = uniqueFullStringMap.size;
    for (let i = 1; i <= maxUnique; i++) {
        windowMap = new Map();
        uniqueNum = 0;
        atLeastKNum = 0;
        left = 0;
        right = 0;
        while (right < s.length) {
            let curr = windowMap.get(s.charAt(right));
            if (curr == undefined || curr == 0) {
                if (uniqueNum < i) {
                    curr = 1;
                    windowMap.set(s.charAt(right), curr);     
                    uniqueNum++;
                    right++;
                    if (curr == k) {
                        atLeastKNum++
                    }
                } else {
                    let countOfLeft = windowMap.get(s.charAt(left));
                    countOfLeft--;
                    if (countOfLeft == 0) {
                        uniqueNum--;
                    }
                    if (countOfLeft == k - 1) {
                        atLeastKNum--;
                    }
                    windowMap.set(s.charAt(left), countOfLeft);
                    left++;
                }
                
            } else {
                curr++;
                windowMap.set(s.charAt(right), curr);
                right++
                if (curr == k) {
                    atLeastKNum++
                }
            }
            
            if (uniqueNum == i && uniqueNum == atLeastKNum) {
                result = Math.max(right - left, result);
            }
        }
    }
    return result;
}
