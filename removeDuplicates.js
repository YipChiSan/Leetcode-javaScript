/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let countStack = [1];
    let letterStack = [s.charAt(0)];
    
    for (let i = 1; i < s.length; i++) {
        if (letterStack[letterStack.length - 1] == s.charAt(i)) {
            if (countStack[countStack.length - 1] == k - 1) {
                for (let j = 0; j < k - 1; j++) {
                    letterStack.pop();
                    countStack.pop();
                }
            } else {
                letterStack.push(s.charAt(i));
                countStack.push(countStack[countStack.length - 1] + 1);
            }
        } else {
            countStack.push(1);
            letterStack.push(s.charAt(i));
        }
        
    }
    
    return letterStack.join('');
};
