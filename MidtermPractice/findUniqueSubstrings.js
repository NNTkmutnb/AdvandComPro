function findUniqueSubstrings(str1, str2, length) {
    if (length <= 0) return [];

    let SubString1 = new Set();

    for (let i = 0; i < str1.length - length; i++) {
        SubString1.add(str1.substring(i, i + length));
    }

    console.log(SubString1)
}

// Example usage
console.log(findUniqueSubstrings("abcdefabcdef", "acdfgacdfg", 3)); 
// Output: [ 'abc', 'bcd', 'cde', 'def', 'efa', 'fab' ]
console.log(findUniqueSubstrings("hellohello", "helloworld", 2)); 
// Output: [ 'oh' ]
console.log(findUniqueSubstrings("javascriptjs", "scriptjava", 4)); 
// Output: [ 'avas', 'vasc', 'ascr', 'ptjs' ]
console.log(findUniqueSubstrings("aaaaaa", "aaaaaa", 2)); 
// Output: []