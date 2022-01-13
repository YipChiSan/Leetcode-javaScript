/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        
        if (s.charAt(i) != "]") {
            stack.push(s.charAt(i));
        } else {
            let temp = "";
            while (stack && stack[stack.length - 1] != "[") {
                temp = stack.pop() + temp;
            }
            
            stack.pop();
            
            let number = "";
            while (stack && isNumber(stack[stack.length - 1])) {
                number = stack.pop() + number;
            }
            
            let result = temp.repeat(parseInt(number));
            
            stack.push(result);
        }
    }
    
    return stack.join('');
};

function isNumber(char) {{
    return !isNaN(parseInt(char));
}}
