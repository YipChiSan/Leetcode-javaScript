/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    let count = new Array(26); for (let i=0; i<26; ++i) count[i] = 0;
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for (let i = 0; i < s.length; i++) {
        if (count[s.charCodeAt(i)] == 0) {
            
            count[s.charCodeAt(i) - 97] = 1;    
        } else {
            count[s.charCodeAt(i) - 97] += 1;
        }
    }
    
    
    
    let mostFrequent = 0;
    let mostFrequentIndex = 0;
    for (let i = 0; i < 26; i++) {
        if (count[i] > mostFrequent) {
            mostFrequent = count[i];
            mostFrequentIndex = i;
        }
    }
    let result = [];
    if (2 * mostFrequent - 1 > s.length) {
        return "";
    } else {
        for (let i = 0; i < mostFrequent; i++) {
            result[2 * i] = alphabet[mostFrequentIndex];
            count[mostFrequentIndex]--;
        }
        
    }
    
    
    let undefinedIndex = 2 * (mostFrequent);
    for (let i = 0; i < 26; i++) {
            
        while (count[i] != 0) {
            count[i]--;
            if (undefinedIndex >= s.length) {
                undefinedIndex = 1;
            }
            result[undefinedIndex] = alphabet[i];
            undefinedIndex += 2;
        }
    }
    
    return result.join('');
};
