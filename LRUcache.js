function ListNode(val, next, prev) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    this.prev = (prev===undefined ? null : prev)
 }

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.dict = new Map();
    this.head = null;
    this.tail = null;
    this.length = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.dict.get(key) === undefined) {
        return -1;
    } else {
        let node = this.dict.get(key);
        if (node !== this.head) {
            if (node !== this.tail) {
                node.next.prev = node.prev;
            } else {
                this.tail = node.prev;
            }
            node.prev.next = node.next;
            node.prev = null;
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        return node.val[1];
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node;
    if (this.dict.get(key) === undefined) {
        if(this.length === this.capacity) {
            let tailedKey = this.tail.val[0];
            if (this.length !== 1) {
                this.tail.prev.next = null;
            } else {
                this.head = null;
            }
            this.tail = this.tail.prev;
            this.dict.delete(tailedKey);
            this.length--;
        }
    
        if (this.head !== null) {
            node = new ListNode([key, value], this.head, null);
            this.head.prev = node;
        } else {
            node = new ListNode([key, value], null, null);
            this.tail = node;
        }
        this.head = node;
        this.dict.set(key, node);
        this.length++;
        } else {
            node = this.dict.get(key);
            if (node !== this.head) {
                if (node !== this.tail) {
                    node.next.prev = node.prev;
                } else {
                    this.tail = node.prev;
                }
                node.prev.next = node.next;
                node.prev = null;
                node.next = this.head;
                this.head.prev = node;
                this.head = node;
            } 
            this.head.val = [key, value];
        }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
