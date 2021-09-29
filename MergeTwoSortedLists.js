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

//Idea is to add all nodes from l2 to l1
var mergeTwoLists = function(l1, l2) {
    if (l1 == null) {
        return l2;
    }
    
    if (l2 == null) {
        return l1;
    }
    
    
    let result = (l1.val <= l2.val ? l1 : l2);
    
    while (l1 != null && l2 != null) {
        if (l1.val <= l2.val) {
            l1 = moveNode(l1, l2); //Move l1 
            let temp = l1;
            l1 = l1.next;
            temp.next = l2;
            
        } else {
            l2 = moveNode(l2, l1);
            let temp = l2;
            l2 = l2.next;
            temp.next = l1;
            
        }
    }
    
    
    return result;
};

//Move nodeList until current node is one node before the node which is larger than the compared node
var moveNode = function(nodeList, node) {
    while (nodeList.next != null && nodeList.next.val <= node.val) {
        nodeList = nodeList.next;
    }
    return nodeList;
}

