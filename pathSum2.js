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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let result = [];
    if (root != null) {
        pathSumRec(root, targetSum, [], result);
    }
    
    return result;
};

var pathSumRec = function(root, restSum, path, result) {     
    if (root.left == null && root.right == null) {
        if(restSum == root.val) {
            result.push([...path, root.val]);
        }
        return ;
    }
    
    if (root.left != null) {
        pathSumRec(root.left, restSum - root.val, [...path, root.val], result);
    }
    
    if (root.right != null) {
        pathSumRec(root.right, restSum - root.val, [...path, root.val], result);
    }
    
}
