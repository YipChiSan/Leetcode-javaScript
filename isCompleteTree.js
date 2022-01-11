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
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    let head = root;
    let numberNodes = getNumberNodes(head);
    
    var isComplete = function(root, index) {
        if (root == null) {
            return true;
        }
        
        if (index >= numberNodes) {
            return false;
        }
        
        return isComplete(root.left, 2 * index + 1) && isComplete(root.right, 2 * index + 2);
    }
    
    return isComplete(root, 0);
};

var getNumberNodes = function(root) {
    if (root == null) {
        return 0;
    } else {
        return (1 + getNumberNodes(root.left) + getNumberNodes(root.right));
    }
}
