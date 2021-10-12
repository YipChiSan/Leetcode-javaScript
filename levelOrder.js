var levelNode = function(root) {
    let queue = [];
    let result = [];
    let curr;
    if (root != null) {
        queue.push(root);
    }
    
    while (queue.length > 0) {
        let queLength = queue.length;
        result.push([]);
        for (let i = 0; i < queLength; i++) {
            curr = queue.shift();
            result[result.length - 1].push(curr.val);
            if (curr.left != null) {
                queue.push(curr.left);
            }
            if(curr.right != null) {
                queue.push(curr.right);
            }
        }
    }
    return result;
};
