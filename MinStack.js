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
