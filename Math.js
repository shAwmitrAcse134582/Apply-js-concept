//power function
const ans = Math.pow(2, 3);
console.log(ans);

//absolute value
let a = 20;
let b = 25;
let gap = Math.abs(a - b);
console.log(gap);

//round function
let n = 2.61;
console.log(Math.round(n));
//ceil function
console.log(Math.ceil(n));
//floor function
console.log(Math.floor(n));

//random function
console.log(Math.round(Math.random() * 100));

let arr = [23, 34, 56, 65, 76, 443, 32, 56];
let mx = Math.max(...arr);
let mn = Math.min(...arr);
console.log(mx);
console.log(mn);