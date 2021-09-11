/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var findLength = function(headNext) {
    let result = 1;
    while (headNext !== null) {
        result++;
        headNext = headNext.next;
    }
    return result;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }
    
    let nextNodeA = headA.next;
    let nextNodeB = headB.next;
    let lengthA = findLength(nextNodeA);
    let lengthB = findLength(nextNodeB);
    if (lengthA > lengthB) {
        for (let i = 0; i < lengthA ; i++){
            if (i >= lengthA - lengthB){
                if (headA === headB) {
                    return headA;
                }
                headB = headB.next;
            }
            headA = headA.next;

        }
    } else {
        for (let i = 0; i < lengthB ; i++){     
            if (i >= lengthB - lengthA){
                if (headA === headB){
                    return headB;
                }
                headA = headA.next;  
            }
            headB = headB.next;
        }
    }
    return null;

};
