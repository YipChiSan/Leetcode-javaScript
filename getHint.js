/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let bulls = 0;
    let cows = 0;
    
    let array = [0 ,0 ,0 , 0 , 0, 0 , 0 , 0 ,0, 0];
    
    for (let i = 0; i < secret.length; i++) {
        let s = parseInt(secret.charAt(i));
        let g = parseInt(guess.charAt(i));
        
        if (s == g) {
            bulls++;
            
        } else {
            if (array[s] < 0) {
                cows++;
            }
            
            array[s]++;
            
            if (array[g] > 0) {
                cows++;
            }
            
            array[g]--;
        }
        
        
    }
    
    return bulls + "A" + cows + "B";
};
