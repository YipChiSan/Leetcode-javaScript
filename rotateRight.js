/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (head == null || head.next == null) {
        return head;
    }
    let curr = head;
    let count = 1;
    
    while (curr.next != null) {
        curr = curr.next;
        count++;
    }
    
    curr.next = head;
    
    let remainder = k % count;
    
    for (let i = 0; i < count - remainder; i++) {
        curr = curr.next;
    }
    
    let result = curr.next;
    curr.next = null;
    
    return result;
};
