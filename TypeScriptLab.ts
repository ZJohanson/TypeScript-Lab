interface Mountain{
    name: string;
    height: number;
}
let Mountains: Mountain[] = [{
    name: 'Kilimanjaro',
    height: 19341
},
{
    name: 'Everest',
    height: 29029,
},
{
    name: 'Denali',
    height: 20310,
}]

function findNameOfTallestMountain(Mountains) {
    let mtn = Mountains[0];
    Mountains.forEach((object) => {
        mtn.height < object.height ? mtn = object : mtn
    })
    return mtn.name
}

let Mtns = findNameOfTallestMountain(Mountains);
console.log(Mtns);

interface Product {
    name: string;
    price: number;
}
interface InventoryItem {
    product: Product;
    quantity: number;
}

let Products: Product[] = [{
    name: "Hamburger", 
    price: 10
},
{
    name: "Pizza", 
    price: 20
},
{
    name: "Boneless Wings", 
    price: 30
}]

function calcAverageProductPrice(array: Product[]): number {
    return array.reduce((acc, val) => acc + val.price, 0) / array.length;
}

let result1 = calcAverageProductPrice(Products);
console.log(result1);

let Inventory: InventoryItem [] = [
    {product: {name: "motor", price: 10.00}, quantity: 10},
    {product: {name: "sensor", price: 12.50}, quantity: 4},
    {product: {name: "LED", price: 1.00}, quantity: 20}
]

function calcInventoryValue(array: InventoryItem []): number {
    return array.reduce((acc, val) => acc + (val.product.price * val.quantity), 0);
}

let result2 = calcInventoryValue(Inventory)
console.log(result2);
