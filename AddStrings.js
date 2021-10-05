/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let pointer1 = num1.length - 1;
    let pointer2 = num2.length - 1;
    let carry = 0;
    let digit1;
    let digit2;
    let newDigit;
    let sum;
    let result = "";
    
    while (pointer1 >= 0 || pointer2 >= 0) {
        digit1 = (pointer1 >= 0) ? parseInt(num1[pointer1]) : 0;
        digit2 = (pointer2 >= 0) ? parseInt(num2[pointer2]) : 0;
        
        sum = digit1 + digit2 + carry;
        newDigit = sum % 10;
        carry = (sum >= 10) ? 1 : 0;
        result = newDigit.toString() + result;
        pointer1--;
        pointer2--;
    }
    
    if (carry == 1) {
        result = carry.toString() + result;
    }
    
    return result;
};
