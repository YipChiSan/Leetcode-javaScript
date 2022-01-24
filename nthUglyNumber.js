/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let count2 = 0;
    let count3 = 0;
    let count5 = 0;
    
    let result = [1];
    
    for (let i = 1; i < n; i++) {
        let newEle = Math.min(2 * result[count2], 3 * result[count3], 5 * result[count5]);
        result.push(newEle);
        if (2 * result[count2] == newEle) {
            count2++;
        }
        if (3 * result[count3] == newEle) {
            count3++;
        }
        if (5 * result[count5] == newEle) {
            count5++;
        }
    }
    
    return result[n - 1];
};
