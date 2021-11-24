/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversalRec = function(root) {
    let result = [];
    inorderRec(root, result);
    return result;
};

var inorderRec = function(root, result) {
    if (!root) {
        return ;
    }
    
    if (root.left) {
        inorderRec(root.left, result);
    }
    
    result.push(root.val);
    
    if (root.right) {
        inorderRec(root.right, result);
    }
}

var inorderTraversal = function(root) {
    let result = [];
    let queue = [];
    let curr = root;
    while (curr || queue.length != 0) {
        while (curr) {
            queue.push(curr);
            curr = curr.left;
        }
        curr = queue.pop();
        result.push(curr.val);
        curr = curr.right;
    }
    return result;
}
