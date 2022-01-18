/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.size = k;
    this.queue = [];
    for (let i = 0; i < k; i++) {
        this.queue.push(null);
    }
    this.currSize = 0;
    this.front = -1;
    this.rear = -1;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (!this.isFull()) {
        if (this.front == -1) {
            this.front = 0;
        }
        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = value;
        this.currSize++;
        
        return true;
        
        
    } else {
        return false;
    }
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (!this.isEmpty()) {
        
        this.currSize--;
        this.queue[this.front] = null;
        this.front = (this.currSize == 0) ? -1 : (this.front + 1) % this.size;
        if (this.currSize == 0) {
            this.rear = -1;
        }
        return true;
    } else {
        return false;
    }
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.currSize == 0) {
        return -1;
    } else {
        return this.queue[this.front];
    }
    
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.currSize == 0) {
        return -1;
    } else {
        return this.queue[this.rear];
    }
    
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.currSize == 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.currSize == this.size;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
