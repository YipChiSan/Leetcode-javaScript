/**
 * @param {string} s
 * @param {string} locked
 * @return {boolean}
 */
var canBeValid = function(s, locked) {
    if (s.length % 2 == 1) {
        return false;
    }
    let leftMin = 0;
    let leftMax = 0;
    for (let i = 0; i < s.length; i++) {
        if (locked.charAt(i) == "1") {
            if (s.charAt(i) == "(") {
                leftMin++;
                leftMax++;
            } else {
                leftMin--;
                leftMax--;
            }
        } else {
            leftMin--;
            leftMax++;
        }
        
        leftMin = Math.max(0, leftMin);
        
        if (leftMin > leftMax) {
            return false;
        }
    }
    
    return leftMin == 0;
};
