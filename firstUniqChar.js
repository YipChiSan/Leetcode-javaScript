/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let array = [];
    for (let i = 0; i < 26; i++) {
        array[i] = -2;
    }
    
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i) - 97;
        if (array[code] != -2) {
            array[code] = -1;
        } else {
            array[code] = i;
        }
    }
    
    let result = Infinity;
    
    for (let i = 0; i < 26; i++) {
        if (array[i] != -2 && array[i] != -1) {
            result = Math.min(result, array[i]);
        }
    }
    
    if (result == Infinity) {
        return -1;
    } else {
        return result;
    }
    
};
