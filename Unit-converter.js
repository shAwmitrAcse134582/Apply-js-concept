//convert inch to feet
let inch = 84;
let feet = inch / 12;
console.log(feet);
//convert inch to feet using function
function convertf(inch) {
    let feet = inch / 12;
    return feet;

}
let val = 111
let height = convertf(val);
console.log(height);

//convert mile to km

function fun(ml) {
    const valu = 1.6 * ml;
    return valu;

}
const mile = 3;
const distance = fun(mile);
console.log(distance);
