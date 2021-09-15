class ListNode {
    constructor(key, val, next, prev){
        this.key = (val===undefined ? 0 : key)
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
        this.prev = (prev===undefined ? null : prev)
    }
 }

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    addNode(node) {
        if (this.size > 0){
            node.next = this.head;
            this.head.prev = node;
        } else {
            this.tail = node;
        }
        this.head = node;
        this.size++;
    }
    
    removeTail() {
        let key = this.tail.key;
        if (this.size == 1) {
            this.head = null;
        }
        this.tail = this.tail.prev;
        this.size--;
        return key;
    }
    
    removeNode(node) {
        if (node == this.head) {
            this.head = this.head.next;
        } else if (node == this.tail) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
    
     
        
        this.size--;
    }
}

class LRUCache{
    constructor(capacity){
        this.dict = new Map();
        this.linkedList = new DoublyLinkedList();
        this.capacity = capacity;
    }
    
    put(key, value) {
        let node = new ListNode(key, value);
        
        if (this.dict.has(key)) {
            
            this.linkedList.removeNode(this.dict.get(key));
            this.dict.delete(key);
        } else{
            if (this.capacity == this.linkedList.size) {
              
                this.dict.delete(this.linkedList.removeTail());
            }
        }
        
        this.linkedList.addNode(node);
        this.dict.set(key, node);
    }
    
    get(key) {
        let node = this.dict.get(key);
        if (node == undefined) {
            return -1;
        } else {
            let value = node.val;
            this.put(node.key, value);
            return value;
            
        }
    }
}
