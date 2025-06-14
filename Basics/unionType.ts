//union type
let personID: string | number;
personID=101;
personID="a6bcdef78";
//
type CartesianCoordinates={
    x:number,
    y:number
}
type LocationCoordinates={
    latitude:number,
    longitude:number
}
let point:Coordinate | LocationCoordinates={x:5,y:10}
point={latitude:23.34,longitude:34.32}

//Function Parameters with union type
function printAge(age: number | string) {
  console.log(`I am ${age} years old`);
}
printAge(21);
printAge("21");
printAge("twenty one");

//type narrowing inside function having union type parameter
function calculateTax(price:number | string ,tax:number){
    if(typeof price==='string'){
        price=parseFloat(price.replace("INR", ""));
    }
    return price*tax;
}

//union type array
const arrayOfNumberAndString:(number|string)[]=[1,2,3,"asd","hhh"]
const mixCoordinateArray:(CartesianCoordinates | LocationCoordinates)[]=[]
mixCoordinateArray.push({x:3,y:4})
mixCoordinateArray.push({ latitude: 3.0012, longitude: 4.234});

//Literal Type

let zero:0=0;
//zero=1;//error-Type '1' is not assignable to type '0'.
let pi:3.14;
let cat:"Pussy";
//combining literal type with union type
const weekEndDay:"Saturday" | "Sunday"="Sunday";

function giveAnswer(answer:"Yes" | "no" | "Not sure"){
    console.log(answer);
}
giveAnswer("Yes");
//giveAnswer("yet confirming");error

type workingDays="Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday"
//const nikWorkingDays:workingDays='saturday'error

// Create a variable called highScore that can be a number OR a boolean
const highScore:number | boolean=false;
//create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
const stuff:(number | string)[]=[1,2,"ddd"]
//Create a literal type called SkillLevel
// There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert"
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";
//Create a type called SkiSchoolStudent
// name must be a string
// age must be a number
// sport must be "ski" or "snowboard"
// level must be a value from the SkillLevel type (from above)
type SkiSchoolStudent={
    name:string,
    age:number,
    sport:'ski' | 'snowboard'
    level:SkillLevel
}
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format.
function greetArray(names:string | string[]){
    if(typeof names=== "string"){
        console.log(`hello ${names}`)
    }
    else{
        names.forEach((name)=>{
            console.log(`hello ${name}`);
        })
    }
}
greetArray("niks");
greetArray(["hii","dgdgd"]);