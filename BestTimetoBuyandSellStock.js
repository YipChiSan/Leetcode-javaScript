/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) {
        return 0;
    }
    
    let maxProfit = 0;
    let lowestPrice = prices[0];
    
    for (let i = 1; i < prices.length ; i++) {
        maxProfit = Math.max(maxProfit, prices[i] - lowestPrice);
        lowestPrice = Math.min(lowestPrice, prices[i])
    }
    
    return maxProfit;
};
