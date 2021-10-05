/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head == null) {
        return false;
    }
    let fastPointer = head.next;
    let slowPointer = head;
    
    while (fastPointer != null) {
        if (fastPointer == slowPointer) {
            return true;
        }
        
        fastPointer = fastPointer.next;
        if (fastPointer == null) {
            return false;
        } else {
            fastPointer = fastPointer.next;
        }
        
        slowPointer = slowPointer.next;
    }
    
    return false;
};
