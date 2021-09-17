/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSumHash = function(nums) {
    let res = new Set()
    let dups = new Set()
    let seen = new Map()
        
    for (let i = 0 ; i < nums.length ; ++i) {
        if (!dups.has(nums[i])) {
            dups.add(nums[i])
            for (let j = i + 1 ; j < nums.length ; ++j) {
                let complement = -nums[i] - nums[j];
                
                if (seen.has(complement) && seen.get(complement) === i) {
                    let triplet = [nums[i],nums[j],complement];
                    triplet.sort();
                    res.add(triplet.join(','));
                }
                seen.set(nums[j],i);
            }
        }
    }
    let resToArray = [];

    // Split each string as array and convert each item to an integer
    res.forEach(item => resToArray.push(item.split(',').map(item => parseInt(item))));
    
    return resToArray
}

var threeSum = function(nums) {
    nums.sort( function(a,b) { return a - b; } );
    let left;
    let right;
    let res = new Set();
    let triplet;
    for (let i = 0; i < nums.length - 2; i++) {
        left = i + 1;
        right = nums.length - 1;
        while (left < right) {
            if(nums[i] + nums[left] + nums[right] < 0) {
                left++;
            } else if (nums[i] + nums[left] + nums[right] > 0){
                right--;
            } else {
                triplet = [nums[i], nums[left], nums[right]];
                res.add(triplet.join(','));
                left++;
                right--;
            }
        }
        
    }
    let resToArray = [];

    // Split each string as array and convert each item to an integer
    res.forEach(item => resToArray.push(item.split(',').map(item => parseInt(item))));
    
    return resToArray
        
    
}
