// Create an empty array of numbers called "ages":
const myNumberArray:number[]=[];
//Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
const gameBoard:string[][]=[]
gameBoard.push(["x",'o']);
//gameBoard.push('x')error
gameBoard.push(["o"]);
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}
type Name={name:string};
type Price={price:number};
type Product=Name & Price;
const productOne:Product={
    name:"nike",
    price:2000
}
const productTwo: Product = {
  name: "adidas",
  price: 200,
};
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
const getTotal=(products:Product[])=>{
    return products.reduce((acc,val)=>{
        return acc+val.price;
    },0)
}
console.log(getTotal([productOne,productTwo]));