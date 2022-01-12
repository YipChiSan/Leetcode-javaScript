/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummyHead = new ListNode(0, head);
    let left = dummyHead;
    let right = head;
    
    while (n > 0 && right != null) {
        n--;
        right = right.next;
    }
    
    while (right != null) {
        right = right.next;
        left = left.next;
    }
    
    left.next = (left.next == null) ? null: left.next.next;
    
    return dummyHead.next;
};
