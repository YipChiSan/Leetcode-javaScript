/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let inorderMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }
    return helper(0, 0, inorder.length - 1, preorder, inorder, inorderMap);
};

var helper = function(preStartIndex, inStartIndex, inEndIndex, preorder, inorder, inorderMap) {
    if (inStartIndex > inEndIndex) {
        return null;
    }
    
    let inOrderRootIndex = inorderMap.get(preorder[preStartIndex]);
    let root = new TreeNode(preorder[preStartIndex]);
    
    root.left = helper(preStartIndex + 1, inStartIndex, inOrderRootIndex - 1, preorder, inorder, inorderMap);
    root.right = helper(preStartIndex + inOrderRootIndex - inStartIndex + 1, inOrderRootIndex + 1, inEndIndex, preorder, inorder, inorderMap);
    return root;
    
}
