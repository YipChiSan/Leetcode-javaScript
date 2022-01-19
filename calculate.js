/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let lastNumber = 0;
    let currNumber = 0;
    let operation = "+";
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (isNumber(s.charAt(i))) {
            let temp = "";
            while (isNumber(s.charAt(i))) {
                temp += s.charAt(i);
                i++;
            }
            i--
            currNumber = parseInt(temp);
        }   
        if (s.charAt(i) == "+" || s.charAt(i) == "-" || s.charAt(i) == "*" || s.charAt(i) == "/" || i == s.length - 1){
            if (operation == "+" || operation == "-") {
                result += lastNumber;
                lastNumber = (operation == "+") ? currNumber : -currNumber;
                
            } else if (operation == "*") {
                lastNumber = lastNumber * currNumber;
                
            } else if (operation == "/") {
                lastNumber = parseInt(lastNumber / currNumber);
                

            }
            
            currNumber = 0;
            operation = s.charAt(i);
        }  
    }
    
    result += lastNumber;
    
    return result;
};

function isNumber(char) {{
    return !isNaN(parseInt(char));
}}
