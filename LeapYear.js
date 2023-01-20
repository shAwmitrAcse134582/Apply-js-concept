function checkLeapYear(y) {
    if ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0))
        return 'LeapYear';
    else
        return 'Not Leap Year';
}
let year = 2023;
let val = checkLeapYear(year);
console.log(val);

//practise-problem-2
// //check LeapYear form array and constructed new array
function isLeapYear(ar) {
    let result = [];
    for (let i = 0; i < ar.length; i++) {

        if ((ar[i] % 4 == 0 && ar[i] % 100 != 0) || (ar[i] % 400 == 0)) {


            result.push(ar[i]);


        }
    }
    // console.log(result);
    return result;

}

let arr = [2023, 2024, 2025, 2028, 2030];
let vl = isLeapYear(arr);
console.log(vl);

