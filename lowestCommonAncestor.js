/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root == null) {
        return null;
    }
    
    if(root == p || root == q) {
        return root;
    }
    
    let rightChild = lowestCommonAncestor(root.right, p, q);
    let leftChild = lowestCommonAncestor(root.left, p, q);
    
    
    if (rightChild != null && leftChild != null) {
        return root;
    }
    
    return (leftChild != null) ? leftChild : rightChild;
};
