/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let firstHalf = new ListNode(0, head);
    let fast = head;
    let length = 1;
    let secondHalf;
    
    while (fast.next != null) {
        firstHalf = firstHalf.next;
        
        if (fast.next.next == null) {
            fast = fast.next;
            length += 1;
        } else {
            fast = fast.next.next;
            length += 2;
        }
    }
    
    
    
    if (length % 2 == 1) {
        secondHalf = firstHalf.next.next;
    } else {
        secondHalf = firstHalf.next;
    }
    
    let tail = null;
    
    while (secondHalf != null) {
        let temp = secondHalf.next;
        secondHalf.next = tail;
        tail = secondHalf;
        secondHalf = temp;
    }
   
    while (tail != null && head != null) {
        if (head.val != tail.val) {
            return false;
        }
        
        tail = tail.next;
        head = head.next;
    }
    
    return true;
    
};

