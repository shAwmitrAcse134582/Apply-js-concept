const shoppingCart = [
    {
        name: 'shoe',
        price: 1200,
        quantity: 2
    },

    {
        name: 'shirt',
        price: 2200,
        quantity: 3
    },
    {
        name: 'pant',
        price: 3700,
        quantity: 2
    },
    {
        name: 'belt',
        price: 700,
        quantity: 4
    }
];

function totalCost(products) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        total += product.price * product.quantity;
        // console.log(product);
    }
    return total;
}

const expense = totalCost(shoppingCart);
console.log(expense);