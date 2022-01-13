/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let dp = [];
    for (let i = 0; i < text1.length; i++) {
        dp.push([]);
        for (let j = 0; j < text2.length; j++) {
            dp[dp.length - 1].push(Infinity);
        }
    }
    
    for (let i = 0; i < text1.length; i++) {
        for (let j = 0; j < text2.length; j++) {
            if (text1.charAt(i) == text2.charAt(j)) {
                let temp = (i - 1 < 0 || j - 1 < 0) ? 0 : dp[i - 1][j - 1];
                dp[i][j] = temp + 1;
            } else {
                let up = (i - 1 < 0) ? 0 : dp[i - 1][j];
                let left = (j - 1 < 0) ? 0 : dp[i][j - 1];
                
                dp[i][j] = Math.max(up, left);
            }
            
        }
    }
    
    return dp[text1.length - 1][text2.length - 1];
};

//Can also be solved by recursion with the same idea
