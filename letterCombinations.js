/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function(digits) {
    let map={
        "2": ["a","b","c"],
        "3":["d","e","f"],
        "4":["g","h","i"],
        "5":["j","k","l"],
        "6":["m","n","o"],
        "7":["p","q","r","s"],
        "8":["t","u","v"],
        "9":["w","x","y","z"],
      };
    let result = [];
    
    let helper = function(index, currentString) {
        if (currentString.length == digits.length) {
            result.push(currentString);
        } else {
            for (let i = 0; i < map[digits.charAt(index)].length; i++) {
                helper(index+1, currentString + map[digits.charAt(index)][i]);
            }
        }
    }
    
    if (digits.length > 0){
        helper(0, "");
    }
    
    
    return result;
      
};
