/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let startNode = new ListNode((l1.val + l2.val) % 10, null);
    
    helper(Math.floor((l1.val + l2.val) / 10), startNode, l1.next, l2.next);
    return startNode;
};

var helper = function(plusOne, result, l1, l2) {
    if (l1 == null && l2 == null) {
        if (plusOne == 1) {
            result.next = new ListNode(1, null);
        }
        return ;
    }
    
    let l1Val = (l1 == null ? 0 : l1.val);
    let l2Val = (l2 == null ? 0 : l2.val);
    
    result.next = new ListNode((l1Val + l2Val + plusOne) % 10, null);
    plusOne = Math.floor((l1Val + l2Val + plusOne) / 10);
    
    helper(plusOne, result.next, (l1 == null) ? l1 : l1.next, (l2 == null) ? l2 : l2.next);
    
}
