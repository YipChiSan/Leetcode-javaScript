/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let pseudoHead = new ListNode(0, head);
    let result = pseudoHead;
    let hasDup = false;
    while (head != null) {
        
        while (head.next != null && head.next.val == head.val) {
            head = head.next;
            hasDup = true;
        }
        
        head = head.next;
        if (hasDup) {
            pseudoHead.next = head;
        } else {
            pseudoHead = pseudoHead.next;
        }
        hasDup = false;
    }
    
    return result.next;
};
