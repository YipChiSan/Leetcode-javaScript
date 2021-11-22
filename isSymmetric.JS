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
var isSymmetric = function(root) {
    return isEqualIte(root);
};

var isEqualRec = function(left, right) {
    if (!left && !right) {
        return true;
    }
    
    if (!left || !right) {
        return false;
    }
    
    return left.val == right.val &&
        isEqualRec(left.left, right.right) &&
        isEqualRec(left.right, right.left);
};

var isEqualIte = function(root) {
    
    let stack = [root.left, root.right];
    while (stack.length != 0) {
        currLeft = stack.shift();
        currRight = stack.shift();
    
        if ((!currLeft && currRight) || (currLeft && !currRight))   {
            return false;
        }
        
        
        
        if (currLeft || currRight) {
            if (currLeft.val != currRight.val) {
                return false;
            }
            stack.push(currLeft.left, currRight.right, currLeft.right, currRight.left);
        }
        
    }
    return true;
}
