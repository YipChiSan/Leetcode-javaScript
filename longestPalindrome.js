/**
 * @param {string} s
 * @return {string}
 */
var longestPalindromeDP = function(s) {
    let comparedTable = [];
    for (let i = 0; i < s.length; i++) {
        comparedTable.push([]);
        for (let j = 0; j < s.length; j++) {
            if (i==j){
                comparedTable[i].push(1);
            } else if (j - i == 1 && s[i] == s[j]) {
                comparedTable[i].push(1)
            } else {
                comparedTable[i].push(0);
            }
        }
    }
    
    let k = 3;
    while (k < s.length) {
        
        for (let i = 0; i < s.length; i++) {
            let j = i + k - 1;
            if (j < s.length && s[i] == s[j] && comparedTable[i + 1][j - 1] == 1) {
                comparedTable[i][j] = 1;
            }
        }
        k++;
    }
    
 
    let maxLength = 0;
    let maxStart = 0;
    
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (j - i == 1 && s[i] == s[j] && maxLength < 2) {
                maxLength = 2;
                maxStart = i;
            } else if (i == j || (comparedTable[i + 1][j - 1] == 1 && s[i] == s[j])) {
                if (maxLength < j - i + 1) {
                    maxLength = j - i + 1;
                    maxStart = i;
                }
            }
        }
    }
    
    return s.substr(maxStart, maxLength);
};

var longestPalindrome = function(s) {
    
    if (s === s.split('').reverse().join('')) return s;
    let subString = s[0];
    
    for (let i = 1; i < s.length; i++) {
        
        let left = i - 1;
        let right = i + 1;
        let curr = s[i];
        
        while (s[i] === s[left]) {
            curr += s[left];
            left--;
        }
        while (s[left] === s[right]) {
            curr = s[left] + curr + s[right];
            left--;
            right++;
        }
        if (curr.length > subString.length) {
            subString = curr;
        }  
    }
    
    return subString;
};
