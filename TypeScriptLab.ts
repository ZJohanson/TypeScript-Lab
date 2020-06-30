interface Mountain{
    name: string;
    height: number;
}
let mountains: Mountain[] = [{
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

function findNameOfTallestMountain(mountains) {
    let mtn = mountains[0].score;
    mountains.map(arr => mtn > arr.score ? mtn = arr.score : mtn)
    return mtn
}

let mtns = findNameOfTallestMountain(mountains);
console.log(mtns);

interface Product {
    name: string;
    price: number;
}
interface InventoryItem {
    product: Product;
    quantity: number;
}

let products: Product[] = [{
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

let result1 = calcAverageProductPrice(products);
console.log(result1);

let inventory: InventoryItem [] = [
    {product: {name: "motor", price: 10.00}, quantity: 10},
    {product: {name: "sensor", price: 12.50}, quantity: 4},
    {product: {name: "LED", price: 1.00}, quantity: 20}
]

function calcInventoryValue(array: InventoryItem []): number {
    return array.reduce((acc, val) => acc + (val.product.price * val.quantity), 0);
}

let result2 = calcInventoryValue(inventory)
console.log(result2);
