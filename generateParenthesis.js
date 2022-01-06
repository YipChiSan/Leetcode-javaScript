/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];
    var helper = function (curr, n, open, closed) {
        if (curr.length == 2 * n) {
            result.push(curr);
            return;
        } 
        
        if (open < n) {
            curr += "(";
            helper(curr, n, open + 1, closed);
            curr = curr.slice(0, -1);
        }
        
        if (closed < open) {
            curr += ")";
            helper(curr, n, open, closed + 1);
            curr = curr.slice(0, -1);
        }
    }
    
    helper("", n, 0, 0);
    return result;
};
