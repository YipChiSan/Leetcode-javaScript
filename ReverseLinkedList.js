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
var reverseList = function(head) {
    let prev = null;
    while(head !== null) {

        let temp = head.next;
        head.next = prev;
        prev = head;
        head = temp;
    }
    
    return prev;
};

var reverseListRecursive = function(head) {
    let prev = null;
    
    return recur(head,prev);
};

var recur = function(head, prev) {
    if (head === null) {
        return prev;
    } else {
        let temp = head.next;
        head.next = prev;
        return recur(temp, head);
    }
}
