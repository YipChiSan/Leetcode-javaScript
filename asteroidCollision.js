/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let stack = [asteroids[0]];
    for (let i = 1; i < asteroids.length; i++) {
        let curr = asteroids[i];
        while ((stack[stack.length - 1] > 0 && curr < 0) && 
               curr != null && 
               stack.length != 0) {
           
            let prev = stack.pop();
            if (Math.abs(curr) < Math.abs(prev)) {
                curr = prev;
            } else if (Math.abs(curr) == Math.abs(prev)) {
                curr = null;
                
            }
        }
        if (curr != null) {
            stack.push(curr);    
        }
        
    }
    
    return stack;
};
