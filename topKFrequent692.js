/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let map = new Map();
    for (let i = 0; i < words.length; i++) {
        let temp = map.get(words[i]);
        if (temp == undefined) {
            map.set(words[i], 1);
        } else {
            map.set(words[i], temp + 1);
        }
    }
    
    let freq = [...map.keys()];
    
    var compareFun = function (a, b) {
        let n = map.get(b) - map.get(a);
            if (n !== 0) {
                return n;
            }

            return a > b ? 1 : -1;
    };
    
    var partition = function(left, right) {
        
        let pivotFreq = map.get(freq[right]);
        let pivotWord = freq[right];
        while (left < right) {
            if (map.get(freq[left]) < pivotFreq ||  (map.get(freq[left]) == pivotFreq && freq[left] > pivotWord)) {
                [freq[left], freq[right]] = [freq[right], freq[left]];
                right--;
            } else {
                left++;
            }
        }
        
        if (map.get(freq[left]) > pivotFreq || (map.get(freq[left]) == pivotFreq && freq[left] < pivotWord)) {
            left++;
        }
        return left;
    }
    
    var quickSelect = function() {
        let left = 0;
        let right = freq.length - 1;
        let pivot = freq.length;
        
        while (pivot != k) {
            pivot = partition(left, right);
            if (pivot < k) {
                left = pivot;
            } else {
                right= pivot - 1;
            }
        }
        
    }
 
    quickSelect();
 
   
    return freq.slice(0, k).sort(compareFun);
};



