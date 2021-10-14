/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) {
        return intervals;    
    }
    
    intervals.sort((int1, int2) => int1[0] - int2[0]);  
    let i = 1;
    let resultPointer = 0;
    let result = [intervals[0]];
    while (i < intervals.length) {
        if (intervals[i][0] <= result[resultPointer][1]) {
            result[resultPointer]  = [result[resultPointer][0], Math.max(intervals[i][1], result[resultPointer][1])];
        } else {
            result.push(intervals[i]);
            resultPointer++;
        }
        i++;
    }
    return result;
};
