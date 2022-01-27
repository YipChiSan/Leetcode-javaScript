
var FreqStack = function() {
    this.freqMap = new Map();
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function(val) {
    let temp = this.freqMap.get(val);
    if (temp == undefined) {
        temp = 1
    } else {
        temp++;
    }
    
    this.freqMap.set(val, temp);
    
    if (temp > this.stack.length) {
        this.stack.push([]);
    }

    this.stack[temp - 1].push(val);
    
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    let result = this.stack[this.stack.length - 1].pop();
    let count = this.freqMap.get(result);
    count--;
    this.freqMap.set(result, count);
    
    if (this.stack[this.stack.length - 1].length == 0) {
        this.stack.pop();
    }
    
    return result;
    
};
