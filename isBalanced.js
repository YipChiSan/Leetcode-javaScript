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
var isBalanced = function(root) {
    return helper(root) != -1;
};

var helper = function(root) {
    if (root == null) {
        return 1;
    } else {
        let left = helper(root.left);
        let right = helper(root.right);
        
        if (left == -1 || right == -1) {
            return -1;
        }
        
        if (Math.abs(left - right) > 1) {
            return -1;
        } else {
            return 1 + Math.max(left, right);
        }
    }
}
