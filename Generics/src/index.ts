

console.log("hello")
const nums:Array<number>=[1,2,3];
const inputElement=document.querySelector<HTMLInputElement>("#input")!;
inputElement.value="hello"
function identity(item:number):number{
    return item;
}
function myGenerics<Type>(item:Type):Type{
return item;
}
interface Cat{
    name:string;
    age:number
}
myGenerics<number>(7);
myGenerics<Cat>({name:"kitty",age:2});

function getRandomElementFromArrayOfAnyType<T>(list:T[]):T{
return list[Math.floor(Math.random()*list.length)]
}

  
console.log(getRandomElementFromArrayOfAnyType<string>(["a","b","c"]));
//type inferring
console.log(getRandomElementFromArrayOfAnyType([true,false,true]));
//generics with multi parameter
function merge<T,U>(objectOne:T,objectTwo:U){
    return {
        ...objectOne,
        ...objectTwo
    }
}
const combine = merge({ name: "nik" }, { pet: ["golu", "molu"] });
const combineTwo = merge({ name: "nik" }, 9);
console.log(combineTwo);//{"name": "nik","pet": ["golu","molu"]}
console.log(combineTwo);//{"name": "nik"} 

function mergeTwoObject<T extends Object, U extends Object>(objectOne: T, objectTwo: U) {
  return {
    ...objectOne,
    ...objectTwo,
  };
}
const combineObj = merge({ name: "nik" }, { pet: ["golu", "molu"] });
console.log(combineObj);

interface Lengthy{
    length:number
}
function getLengthDouble<T extends Lengthy>(obj:T):number{
    return obj.length*2;
}
console.log(getLengthDouble("hello"))
console.log(getLengthDouble([1,2]));
//console.log(getLengthDouble(combineObj));//Property 'length' is missing in type '{ name: string; } & { pet: string[]; }' but required in type 'Lengthy'.ts.

console.log([1,2,3])
//default type in generic function
function makeEmptyArray<T = number>(obj: T) {
  return [];
}
console.log(makeEmptyArray([1, 2, 3]));
console.log(makeEmptyArray("hello"));
//generic class
class ApiResponse<T> {
  constructor(
    public success: boolean,
    public data: T | null,
    public errorMessage: string | null = null
  ) {}

  isSuccess(): boolean {
    return this.success && this.data !== null;
  }
}
interface User {
  id: number;
  name: string;
}

const userResponse = new ApiResponse<User>(true, { id: 1, name: "Alice" });

if (userResponse.isSuccess()) {
  console.log("User:", userResponse.data?.name);
}
    