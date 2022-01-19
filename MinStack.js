var MinStack = function() {
    this.minstack = [];
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if (this.minstack.length == 0) {
        this.minstack.push(val);
    } else {
        if (this.minstack[this.minstack.length - 1] > val) {
            this.minstack.push(val);
        } else {
            this.minstack.push(this.minstack[this.minstack.length - 1]);
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.minstack.pop();
    return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minstack[this.minstack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


var MinStack = function() {
    this.min = 0;
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.stack.length == 0) {
        this.min = val;
        this.stack.push(val);
    } else {
        if (val < this.min) {
            this.stack.push(2 * val - this.min);
            this.min = val;
        } else {
            this.stack.push(val);
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.length == 0) {
        return null;
    }
    let result = this.stack.pop();
    if (result < this.min) {
        let temp = this.min;
        this.min = 2 * this.min - result;
        result = temp;
    }
    return result;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
   
    return (this.stack[this.stack.length - 1] < this.min) ? this.min : this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
