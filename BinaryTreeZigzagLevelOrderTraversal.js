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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (root === null) {
        return [];
    }
    let currentStack = [root];
    let nextStack = [];
    let result = [];
    while (currentStack.length !== 0) {
        result.push([]);
        while (currentStack.length !== 0){
            currentNode = currentStack.pop();
            
            if (result.length % 2 === 1) {
                if (currentNode.left !== null) {
                    nextStack.push(currentNode.left);
                }
        
                if (currentNode.right !== null) {
                    nextStack.push(currentNode.right);
                }
            } else {
                if (currentNode.right !== null) {
                    nextStack.push(currentNode.right);
                }
                
                if (currentNode.left !== null) {
                    nextStack.push(currentNode.left);
                }
            }
            
                result[result.length - 1].push(currentNode.val);
            
        }
        currentStack = nextStack;
        nextStack = [];
    }
    return result;
};
