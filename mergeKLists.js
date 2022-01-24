/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    return helper(lists, 0, lists.length - 1);
    
};

var helper = function (lists, start, end) {
    if (start == end) {
        return lists[start];
    } else if (start < end) {
        let mid = Math.floor((start + end) / 2);
        let left = helper(lists,start,mid);
        let right = helper(lists, mid + 1, end);
        return mergeList(left, right);
    } else {
        return null;
    }
}

var mergeList = function(list1, list2) {
    
    let result = new ListNode(0, null);
    let temp = result;
    while(list1 != null && list2 != null) {
        if (list1.val < list2.val) {
            result.next = list1;
            list1 = list1.next;
            result = result.next;
        } else {
            result.next = list2;
            list2 = list2.next;
            result = result.next;
        }        
    }

    if (list1 == null && list2 != null) {
        result.next = list2;
    }
    
    if (list1 != null && list2 == null) {
        result.next = list1;
    }
    
    return temp.next;
}
