/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let dp = new Array(matrix[0].length); 
    for (let i=0; i<matrix[0].length; ++i) dp[i] = 0;
    
    let prev;
    let temp;
    let result = 0;
    for (let i = 0; i < matrix.length; i++) {
        prev = 0;
        for (let j = 0; j < matrix[0].length; j++) {
            temp = dp[j];
            if (matrix[i][j] == '1') {
                if ( j == 0){
                    dp[j] = 1;
                } else {
                    dp[j] = Math.min(prev, dp[j - 1], dp[j]) + 1;
                }
                result = Math.max(result, dp[j] * dp[j]);
            } else {
                dp[j] = 0;
            }
            prev = temp;
        }
    }
    
    return result;
};
