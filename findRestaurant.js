/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const map1 = new Map();
    
    for (let i = 0; i < list1.length; i++) {
        map1.set(list1[i], [i, false]);
    }
    
    for (let i = 0; i < list2.length; i++) {
        if (map1.has(list2[i])) {
            let sum = map1.get(list2[i])[0] + i;
            map1.set(list2[i], [sum, true]);
        }
    }
    let resultCount = Infinity;
    let result = [];
    for (let i = 0; i < list1.length; i++) {
        if (map1.get(list1[i])[1]) {
            if (map1.get(list1[i])[0] < resultCount) {
                result = [list1[i]];
                resultCount = map1.get(list1[i])[0];
            } else if (map1.get(list1[i])[0] == resultCount) {
                result.push(list1[i]);
            }
        }
    }
    
    return result;
};
