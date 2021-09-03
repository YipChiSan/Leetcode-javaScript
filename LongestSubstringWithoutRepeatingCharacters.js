/** Question: 3
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
    const hashMap = new Map();
    let maxLength = 0;
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        if (hashMap.get(s[right])) {
            left = Math.max(hashMap.get(s[right]), left);
        }
        maxLength = Math.max(maxLength, right - left + 1);
        hashMap.set(s[right], right + 1);
    }
    return maxLength;
};
