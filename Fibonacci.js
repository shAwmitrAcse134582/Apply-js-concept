//fibonacci series

let fibo = [0, 1];
for (let i = 2; i <= 13; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);