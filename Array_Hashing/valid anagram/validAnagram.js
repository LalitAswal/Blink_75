// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// const validAnagram = (s) =>{
//     const sorted =s.sort(a,b => a>b)
//     console.log(sorted)
// }

// console.log(validAnagram("rat"))
// console.log(validAnagram("anagram"))
const validAnagram = (s, t) =>{
    if(s.length !== t.length) return false
    let sortedS =s.split('').sort().join("")
    let sortedT =t.split('').sort().join("")
    return sortedS === sortedT
}

console.log(validAnagram("rat", "ca"))
console.log(validAnagram("anagram", "nagaram"))
