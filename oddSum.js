function oddSum(ar, l) {
    let sum = 0;
    for (let i = 0; i < l; i++) {
        if (ar[i] % 2 != 0) {
            sum += ar[i];
        }
    }
    return sum;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let len = arr.length;
let val = oddSum(arr, len);
console.log(val);