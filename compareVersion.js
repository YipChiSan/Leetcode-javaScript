/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let ver1 = version1.split(".");
    let ver2 = version2.split(".");
    
    for (let i = 0; i < Math.max(ver1.length, ver2.length); i++) {
        if (ver1[i] == undefined) {
            ver1[i] = 0;
        }
        
        if (ver2[i] == undefined) {
            ver2[i] = 0;
        }
        
        if (parseInt(ver1[i]) > parseInt(ver2[i])) {
            return 1;
        }
        
        if (parseInt(ver1[i]) < parseInt(ver2[i])) {
            return -1;
        }
    }
    
    return 0;
};
