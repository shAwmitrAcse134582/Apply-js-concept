//factorial using for loop
function factorialNumber(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;

}
let num = 4;
let val = factorialNumber(num);
console.log(val);

//factorial using while loop
function fNumber(nmb) {
    let f = 1, j = 1;
    while (j <= nmb) {
        f *= j;
        j++;
    }
    return f;
}
let nm = 5;
let vl = fNumber(nm);
console.log(vl);
