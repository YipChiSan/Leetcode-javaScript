/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequencesMe = function(s) {
    let map = new Map();
    let result = [];
    for (let i = 0; i < s.length - 9; i++) {
        let temp = "";
        for (let j = i; j < i + 10; j++) {
            temp += s.charAt(j)
        }
        
        if (map.has(temp)) {
            if (map.get(temp) == 1) {
                result.push(temp);
                map.set(temp, 0);
            } 
            
        } else {
            map.set(temp, 1);
        }
    }
    
    return result;
};
