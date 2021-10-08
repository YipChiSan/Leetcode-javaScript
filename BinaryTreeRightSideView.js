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
var rightSideView = function(root) {
    let result = [];
    rightSideViewRecur(root, 0, result);
    return result;
};

var rightSideViewRecur = function(root, level, result) {
    if (root == null) {
        return;
    } else {
        if (result.length == level) {
            result.push(root.val);
        } else {
            result[level] = root.val;
        }
    }
    
    rightSideViewRecur(root.left, level + 1, result);
    rightSideViewRecur(root.right, level + 1, result);
}
