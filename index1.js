let str="Nikhil";
let result=str.toUpperCase();
let result1=str.toLowerCase();

console.log(result1);
console.log(result);

let str1="   Hello World   ";
console.log(str1.trim());
include=str1.includes("World");
console.log(include);

let a="admainogmal.com";
startwith=a.startsWith("admin");
endwith=a.endsWith("com");
console.log(startwith);
console.log(endwith);

let b="admainogmal.com";
let part=b.slice(2,7);
console.log(part);

let c="aabc";
let rep=c.replace("a","x");
console.log(rep);
let rep1=c.replaceAll("a","x");
console.log(rep1);

let d="ISSAmSSAmAn";
let rep2=d.replace("");
console.log(rep2);  
