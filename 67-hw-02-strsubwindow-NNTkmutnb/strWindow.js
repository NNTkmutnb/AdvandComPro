function minWindowSubstring(s, t) {
// your code here
    let need = {};
    for (let char of t) {
        need[char] = (need[char] || 0) + 1;
    }
    
    let have = {};
    let start = 0;
    let minLength = Infinity;
    let minStart = 0;
    let required = Object.keys(need).length;
    let found_target = 0;

    for (let end = 0; end < s.length; end++) {
        let charEnd = s[end];

        if (need[charEnd]) {
            have[charEnd] = (have[charEnd] || 0) + 1;
            if (have[charEnd] === need[charEnd]) {
                found_target++;
            }
        }

        while (found_target === required) {
            if (end - start < minLength) {
                minLength = end - start + 1;
                minStart = start;
            }

            let charStart = s[start];
            if (need[charStart]) {
                have[charStart]--;
                if (have[charStart] < need[charStart]) {
                    found_target--;
                }
            }
            start++;
        }
    }

    return minLength === Infinity ? "" : s.substring(minStart, minStart + minLength);

}

module.exports = minWindowSubstring;

console.log(minWindowSubstring("ADOBECODEBANC", "ABC")); // -> "BANC" 
console.log(minWindowSubstring("this is a test string", "tist")); // -> "t stri" 
console.log(minWindowSubstring("a", "a")); // -> "a" 
console.log(minWindowSubstring("a", "aa")); // -> ""
