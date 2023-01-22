function maxString(a) {
    let max_str = a[0].length;
    let ans = a[0];
    for (let i = 0; i < a.length; i++) {
        let maxi = a[i].length;
        if (maxi > max_str) {
            ans = a[i];
            max_str = maxi;
        }
    }
    return ans;

}

let arr = ["shawmitra", "Ashik", "Prottyush", "sharif", "Nasim", "Soheb"];
let value = maxString(arr);
console.log(value);