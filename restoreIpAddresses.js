/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if (s.length < 4 || s.length > 12) {
        return [];
    }
    let result = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 1 + i; j < Math.min(s.length, i + 4); j++) {
            for (let k = 1 + j; k < Math.min(s.length, j + 4); k++) {
                let first = s.substring(0, i);
                let second = s.substring(i, j);
                let third = s.substring(j, k);
                let forth = s.substring(k, s.length);
                if (isValid(first) && isValid(second) && isValid(third) && isValid(forth)) {
                    result.push(first + "." + second + "." + third + "." + forth);
                }
            }
        }
    }
    
    return result;
};

var isValid = function(s) {
    return s.length < 4 && (s.charAt(0) != "0" || s.length == 1) && parseInt(s) <= 255;
}
