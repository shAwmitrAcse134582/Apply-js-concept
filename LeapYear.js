function checkLeapYear(y) {
    if ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0))
        return 'LeapYear';
    else
        return 'Not Leap Year';
}
let year = 2023;
let val = checkLeapYear(year);
console.log(val);