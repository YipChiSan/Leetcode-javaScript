
var RandomizedSet = function() {
    this.elementList = [];
    this.elementMap = new Map();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.elementMap.has(val)) {
        return false;
    } else {
        this.elementList.push(val);
        this.elementMap.set(val, this.elementList.length - 1);
        return true;
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.elementMap.has(val)) {
        return false;
    } else {
        
        let index = this.elementMap.get(val);
        if (index == this.elementList.length - 1) {
            this.elementList.pop();
        } else {
            let temp = this.elementList[this.elementList.length - 1];
            this.elementList[this.elementList.length - 1] = this.elementList[index];
            this.elementList[index] = temp;
            this.elementMap.set(temp, index);
        }
        this.elementMap.delete(val);
        this.elementList.pop();
        return true;
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.elementList[Math.floor(Math.random()*this.elementList.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
