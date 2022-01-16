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
var insertionSortList = function(head) {
    let dummyhead = new ListNode(0, head);
    
    while (head.next != null) {
        let currHeadBefore = dummyhead;
        let currHead = dummyhead.next;
        while (currHead.val < head.next.val) {
            currHead = currHead.next;
            currHeadBefore = currHeadBefore.next;
        }
        
        if (currHead != head.next) {
            let temp = new ListNode(head.next.val, null);
            head.next = head.next.next;
        
            currHeadBefore.next = temp;
            temp.next = currHead;
        } else {
            head = head.next;
        }
        
        
    }
    
    return dummyhead.next;
};
