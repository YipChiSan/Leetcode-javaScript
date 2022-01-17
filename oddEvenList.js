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
var oddEvenList = function(head) {
       if (head == null) return null;
        let odd = head;
        let even = head.next;
        let evenHead = head.next;
        // `even != null` rules out the list of only 1 node
        // `even.next != null` rules out the list of only 2 nodes
        while (even != null && even.next != null) {
            // Put odd to the odd list
            odd.next = odd.next.next;
            
            // Put even to the even list
            even.next = even.next.next;
            
            // Move the pointer to the next odd/even
            odd = odd.next;
            even = even.next;
        }
        odd.next = evenHead;
        return head;
    }
