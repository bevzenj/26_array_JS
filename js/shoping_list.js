let shopingList = [
  { 
    name: 'bread',
    amount: 1,
    value: 'bought', 
  },
  { 
    name: 'orange',
    amount: 5,
    value: 'not bought', 
  },
  { 
    name: 'cockies',
    amount: 10,
    value: 'not bought',
  },
  {
    name: 'potatoes',
    amount: 15,
    value: 'bought',
  },
  {
    name: 'tomatoes',
    amount: 4,
    value: 'bought',
  }
]

function compareList(a) {
  if (a.value == 'bought' )
    return 1; 
  if (a.value == 'not bought') 
    return -1; 
}

let sortList = shopingList.sort(compareList);

console.log(sortList);

function addProduct(n, a, v) {
  let newProduct = new Object({
    name: n,
    amount: a,
    value: v,
  })

  shopingList.push(newProduct);
}

function addProduct(name, amount, value) {
  shopingList.push({name, amount, value})
}

addProduct('carrot', 5, 'bought');

console.log(shopingList);



