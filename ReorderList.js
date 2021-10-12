/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (head.next == null || head.next.next == null) {
        return head;
    }
    let firstListStart = head;
    let medianAndFinal = findMedianAndFinalNode(head);
    let firstListEnd = medianAndFinal[0];
    let secondListEnd = medianAndFinal[1];
    
    //break into two lists
    let secondListStart = firstListEnd.next;
    firstListEnd.next = null;
    
    //reverse second list
    let reversedList = reverseList(secondListStart);
    
    
    //merge two lists
    let result = mergeTwoLists(firstListStart, reversedList);
    
    return result;
};

var findMedianAndFinalNode = function(head) {
    if (head.next == null) {
        return [head, null];
    } else {
        let slow = head;
        let fast = head.next;
        while (fast.next != null) {
            slow = slow.next;
            fast = fast.next;
            if (fast.next == null) {
                break;
            } else {
                fast = fast.next;
            }
        }    
        return [slow, fast];
    }
};

var reverseList = function(head) {
    let temp;
    let prev = null;
    while (head != null) {
        temp = head;
        head = head.next;
        temp.next = prev;
        prev = temp;
    }
    return prev;
};

var mergeTwoLists = function(first, second) {
    let start = first;
    let firstTemp;
    let secondTemp;
    while (second != null) {
        
        firstTemp = first.next;
        first.next = second;
        first = firstTemp;  
        secondTemp = second.next;
        second.next = first;
        second = secondTemp;
    }
    return start;
}
