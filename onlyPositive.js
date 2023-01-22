//*construct new array with positive number from an array
function onlyPositive(ar) {
    let a = [];
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] >= 0) {
            a.push(ar[i]);
        }
        else {
            break;
        }
    }
    return a;

}

let arr = [2, 1, 4, 3, 5, -1, 6, 7];
let val = onlyPositive(arr);
console.log(val);