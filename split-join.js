//spilit every word and store in the array
const mySelf = "This is shawmitra Das dwip.I am a student of Barishal university";
const part = mySelf.split(' ');
const sentence = mySelf.split('.');
const char = mySelf.split('');
console.log(part);
console.log(sentence);
console.log(char);

// splice a sentence
const sl = mySelf.slice(5, 12);
console.log(sl);

// substirng 
const sub = mySelf.substring(5, 12);
console.log(sub);

//join 
const arr = ['this is shawmitra', 'Das Dwip'];
const nw = arr.join(':');
console.log(nw);