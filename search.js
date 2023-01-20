let country = "Bangladesh is a very beautiful country";
let search = 'Country';


//igonore case

let str = country.toLowerCase();
let value = search.toLowerCase();

let val = str.includes(value);
console.log(val);

// -------------
// search index
console.log(country.indexOf('Bangladesh'));
console.log(country.lastIndexOf('Bangladesh'));

//start with
console.log(country.startsWith('Bangladesh'));
console.log(country.endsWith('country'));
