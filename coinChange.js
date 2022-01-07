/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = [0];
    
    for (let j = 1; j <= amount; j++) {
        if (j < coins[0]) {
            dp.push(-1);
        } else {
            if (dp[j - coins[0]] == -1) {
                dp.push(-1);
            } else {
                dp.push(dp[j - coins[0]] + 1);
            }
            
        }
    }
    
    
    
    for (let i = 1; i < coins.length; i++) {
        for (let j = 1; j <= amount; j++) {
            if (j >= coins[i]) {
                 if (dp[j - coins[i]] != -1) {
                    
                    if (dp[j] == -1) {
                        dp[j] = dp[j - coins[i]] + 1;
                    } else {
                        dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1);
                    }
                }
                
            }
        }
    }
    
    return dp[amount];
};
