function greet5(name:string) { //return type string infered by typescript
  //name any type
  return `${name}`;
}
function logSomething(x:boolean){//return type void
console.log(x);
}

function greetSomeone(name:string):string{//return type string
 return `${name}`;
}
//arrow function
const multiply=(x:number,y:number):number =>{
return x*y;
}
function doSomething(num:number):number | string{//string or number as return type
    if(num<0){
        return `negative number`;
    }
    return num;
}
//anonymous function
const colors=['red','yellow','green']
const newColors=colors.map(function(color){//typescript infer color type as string in anonymous function
return color;
})
const mixedItems=[1,'red',true]
const newMixedItems=mixedItems.map(function(item){//string | number | boolean
  return item;
})
//void type
function loggedSomething():void{
  //return 0; //Type 'number' is not assignable to type 'void'
  console.log('hii');
}
function loggedSomething2(): void {
  //return 0; //Type 'number' is not assignable to type 'void'
  console.log("hii");
  return undefined;
}
//never as return type
function giveError(msg:string):never{
    throw new Error(msg)
}
function gameLoop():never{
    let x:number=0
    while(true){
        x++;
    }
}
