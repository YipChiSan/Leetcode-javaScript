/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] == "+") {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(a + b);
        } else if (tokens[i] == "-") {
            let a = stack.pop();
            let b = stack.pop();
            stack.push(b - a);
        } else if (tokens[i] == "*") {
            let a = stack.pop();
            let b = stack.pop();
            
            stack.push( a * b);
        } else if (tokens[i] == "/") {
            let a = stack.pop();
            let b = stack.pop();
            let remainder = b % a;
            let result = Math.floor(b / a);
            if (result < 0 && remainder != 0) {
                result++;
            }
            stack.push(result);
        } else {
            stack.push(parseInt(tokens[i]));
        }
        
        
    }
    
    return stack.pop();
};
