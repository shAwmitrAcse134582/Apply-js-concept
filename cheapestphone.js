let phones = [
    {
        name: 'samsung',
        price: 30000
    },
    {
        name: 'Walton',
        price: 32000
    },
    {
        name: 'iphone',
        price: 90000
    },
    {
        name: 'xaomi',
        price: 24000
    },
    {
        name: 'oppo',
        price: 10000

    }
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        let phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

let selection = cheapestPhone(phones);
console.log(selection);