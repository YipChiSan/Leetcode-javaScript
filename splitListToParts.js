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
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    let result = [];

    let length = 0;
    
    let curr = head;
    
    while (curr != null) {
        length++;
        curr = curr.next;
    }
    
    let minNumOfNodes = Math.floor(length / k);
    let remainder = length % k;
   
    while (k > 0) {
        result.push(head);
       
        let iterationTime = (remainder <= 0) ? minNumOfNodes - 1 : minNumOfNodes;
        remainder = remainder - 1;
        
        for (let i = 0; i < iterationTime; i++) {
            head = (head != null) ? head.next : head;
        }
        
        
        let temp = (head != null) ? head.next : head;
        if (head != null) {
            head.next = null;
        }
        
        head = temp;
        k--;
    }
    
    return result;
};
