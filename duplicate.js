//remove duplicate using includes function
function duplicates(a) {
    let unique = [];
    for (let i = 0; i < a.length; i++) {
        let ar = a[i];
        if (unique.includes(ar) == false) {
            unique.push(ar);
        }

    }
    return unique;
}

let arr = [1, 2, 3, 4, 2, 3, 4, 5, 3, 4, 5];
let val = duplicates(arr);
console.log(val);

//remove duplicates usning sorting function
const points = [10, 100, 1, 50, 100, 10, 50, 20];

points.sort(function (a, b) {
    return a - b;
}
);
let narry = [];
for (let i = 0; i < points.length - 1; i++) {
    if (points[i] != points[i + 1]) {
        narry.push(points[i]);
    }
}
console.log(narry);

//remove duplicates value from array using set method

let st = new Set(points);

console.log(st);
