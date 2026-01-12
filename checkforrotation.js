// Check for Rotation Given two strings, check if one is a rotation of another. Input: "ABCD", "CDAB" → Output: true

let str1 = "ABCD"
let str2 = "ADCB"
let isRotation = (str1.length === str2.length) && (str1 + str1).includes(str2)
console.log(isRotation)
