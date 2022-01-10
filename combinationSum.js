/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    
    var helper = function(candidates, start, target, curr) {
        if (target == 0) {
            result.push(JSON.parse(JSON.stringify(curr)));
            return;
        }
        
        if (target < 0) {
            return;
        }
        
        for (let i = start; i < candidates.length; i++) {
            curr.push(candidates[i]);
            helper(candidates, i, target - candidates[i], curr);
            curr.pop();
            
        }
    }
    
    helper(candidates, 0 , target, []);
    
    return result;
};
