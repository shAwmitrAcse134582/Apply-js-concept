const fish = {
    name: 'king hilsha',
    adress: 'Chandpur',
    color: 'Silver',
    phone: '01521703032',
    price: 4000
}

// const color = fish.color
// console.log(color);

const { name, age } = {
    name: 'shawmitra',
    roll: '20CSE033',
    age: 21,
}
console.log(name, age);


//array destructuring
const [first, second] = [44, 99];
console.log(first);

//*destructing Function
function getName() {
    return ['lion', 'tiger'];
}
const [king, boss] = getName();
console.log(king, boss);