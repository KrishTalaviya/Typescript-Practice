function greet(name){//name any type
    return `${name}`
}
/* greet(9);
greet(true) */
greet('niksindia')

function greetProperly(name:string){
 // name = 9; //error-Type 'number' is not assignable to type 'string'
  return `${name}`;
}
/* greetProperly(9);//error
greetProperly(true);//error */
greetProperly('niksIndia')
const greetTwo=(name:string,age:number)=>{
    return `${name} is ${age} old`
}
greetTwo("nikunj",9)
//default parameters
const greetThree= (name:string="starngers" )=>{
    return `${name}`;
}