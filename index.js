/*const products = [
    { name: 'Shampoo', price: 4.99 },
    { name: 'Donuts', price: 7.99 },
    { name: 'Cookies', price: 6.49 },
    { name: 'Bath Gel', price: 13.99 }
  ];
  
function currentSpending(products){
    let totalPrice = 0
    products.forEach(function(product){
        totalPrice = product.price + totalPrice
    })
    console.log(totalPrice)
    }
currentSpending(products)*/

  const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = batteryBatches.reduce(function(total,element){
    return element + total})
