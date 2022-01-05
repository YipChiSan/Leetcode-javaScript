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

//This is the bottom up solution
var sortList = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    
    let tail = new ListNode();
    let nextSubList = new ListNode();
    
    var getSize = function(headNode) {
        let result = 0;
        let tempNode = headNode;
        while (tempNode != null) {
            result++;
            tempNode = tempNode.next;
        }
        
        return result;
    }
    
    let n = getSize(head);
    
    let start = head;
    let dummyHead = new ListNode();
    
    var split = function(start, size) {
        let midPrev = start;
        let end = start.next;
        
        for (let i = 1; i < size && (midPrev.next != null || end.next != null); i++) {
            if (end.next != null) {
                end = (end.next.next != null) ? end.next.next : end.next; //end will go to steps forward
            }
            if (midPrev.next != null) {
                midPrev = midPrev.next; //midPrev will only go one step forward
            }
        }
        
        let mid = midPrev.next;
        midPrev.next = null;
        nextSubList = end.next;
        end.next = null;
        return mid;
    }
    
    var merge = function (list1, list2) {
        let dummyHead= new ListNode();
        let newTail = dummyHead; //create a new list
        
        while (list1 != null && list2 != null) {
            if (list1.val < list2.val) {
                newTail.next = list1;
                list1 = list1.next;
                newTail = newTail.next;
            } else {
                newTail.next = list2;
                list2 = list2.next;
                newTail = newTail.next;
            }
        }
        
        newTail.next = (list1 != null) ? list1 : list2;
        
        while (newTail.next != null) {
            newTail = newTail.next;
        }
        
        // link the old tail with the head of merged list
        tail.next = dummyHead.next;
        
        // update the old tail to the new tail of merged list
        tail = newTail;
    }
    
    for (let size = 1; size < n; size = size * 2) {
        tail = dummyHead;
        while (start != null) {
            if (start.next == null) {
                tail.next = start;
                break;
            }
            
            let mid = split(start, size);
            merge(start, mid);
            start = nextSubList;
            
        }
        start = dummyHead.next;
    }
    return dummyHead.next;
}
