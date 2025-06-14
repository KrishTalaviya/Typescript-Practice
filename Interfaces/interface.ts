interface CartesianCoordinate{
    x:number;
    y:number;
    z?:number//optional property
}
const originCoordinates:CartesianCoordinate={
    x:0,
    y:0
}
interface User{
    readonly id:number;
    userName:string;
    sayHi:()=>string;
    greet():string;
    logIn(email:string):boolean
}
//method
const userNik:User={
    id:1,
    userName: "Nik",
    sayHi:function(){
        return "Hii"
    },
    greet:()=>{
        return "greetings"
    },
    logIn:(e:string):boolean=>{
        if(e===this.userName){
            return true
        }
        return false;
    },
}
//userNik.id=2 error
//reopening an interface
interface Dragon {
  name: string;
  age?: number; // optional
}
interface Dragon {
  name: string;
  roar(): void;
}
interface Dragon {
  readonly id: number;
  name: string;
}
const drogon:Dragon={
    name:"darcarys",
    id:2,
    roar(){console.log("roars")},
    firePower:6,
    alive:false
}  
//Inherting an interface
interface Creature {
  alive: boolean;
}

interface Dragon extends Creature {
  name: string;
  firePower: number;
}
  
