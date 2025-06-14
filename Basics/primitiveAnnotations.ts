//type annotations
let stringOne:string="Hello"
console.log(stringOne.toLowerCase());
let myNumber:number=9;
console.log(myNumber+2)
let myTruth:boolean=true;
console.log(myTruth)
let a: null = null;
console.log(a)
let selectedColor: string | null = null;
selectedColor = "blue";
selectedColor = null;
/* selectedColor = 9;error */
let b: undefined = undefined;

//type inference
let stringTwo="hii";//implicit string type
//stringTwo=6 
//any type-I don’t care, do whatever
let myVar:any=9
myVar="hii"
//unknown type-I don’t know, check first.You must perform a type check before using it
let c: unknown = "hello";
/* c.toLowerCase(); // ❌ Error! */
let value: unknown = "example";

if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✅ safe
}

//delayed Initialization
let firstMovie;//any type
let secondMovie:string;
const movies=['amadeus','whiplash','avengers','dark knight']
for(const movie of movies){
    if(movie == 'amadeus'){
        firstMovie=movie
    }
    else if(movie == 'whiplash'){
        secondMovie=movie;
    }
    
}
firstMovie();//any type
//secondMovie()-error string type

