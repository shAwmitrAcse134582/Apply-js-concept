//reverse string
function reversest(text) {
    let words = text.split(' ');
    let res = [];
    for (let i = words.length - 1; i >= 0; i--) {

        res.push((words[i]))
    }
    return res.join(' ');

}
let str = "This is shawmitra";
let newstirng = reversest(str);
console.log(newstirng);