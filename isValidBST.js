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
var isValidBST = function(root) {
    return helper(root, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);
};

var helper = function(current, upperBound, lowerBound) {
    if (current == null) {
        return true;
    }
    
    if (current.val >= upperBound || current.val <= lowerBound) {
        return false;
    }
    
    return helper(current.left, Math.min(upperBound, current.val), lowerBound) && helper(current.right, upperBound, Math.max(lowerBound, current.val));
    
}
