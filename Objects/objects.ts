//Objects as Parameter
function printName(person:{firstName:string;lastName:string}):string{
    return `full Name->${person.firstName} ${person.lastName}`;
}
console.log(printName({firstName:"Niks",lastName:"India"}));
//Objects as variable
const coordinateOne: { x: number; y: number } = { x: 30, y: 12 };

//Objects ad return type
function generateRandomCoordinate(): { x: number; y: number } {
    return {x:Math.random(),y:Math.random()}
}
//excess properties
//printName({firstName:"Dilip",lastName:"Ram",age:23})error
let singer = { firstName: "Dilip", lastName: "Ram", age: 23 };
printName(singer);

//without type alias
/* function doubleDistance(coordinate: { x:number, y: number }): {x:number,y: number;} {
    return {x:coordinate.x*2,y:coordinate.y*2}
} */
//with type alias
type Coordinate={
    x:number,
    y:number,
    z?:number;//optional parameter
}
let originCoordinate:Coordinate={x:0,y:0}//2d point
let threeDimensionCoordinate:Coordinate={x:2,y:3,z:3}//3d point
function doubleDistance(coordinate: Coordinate): Coordinate {
  return { x: coordinate.x * 2, y: coordinate.y * 2 };
}
//nested objects
type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 12873321,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};

const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);

type User={
  readonly id:number,
  userName:string,
  age ?:number
}
const userOne:User={
  id:101,
  userName:"Nikunj",
  age:21
}
console.log(userOne)
//userOne.id=102;Cannot assign to 'id' because it is a read-only property
//Intersecting types

type BasicUser = {
  readonly id: string;
  name: string;
  email: string;
  isMale ?:boolean
};
type AdminPrivileges = {
  accessLevel: "superadmin" | "moderator";
  canDeleteUsers: boolean;
};
 
type AdminUser=BasicUser & AdminPrivileges;

const adminOne:AdminUser={
  id:"abc6d",
  name:"dilip",
  email:"abc@gmail.com",
  accessLevel:"moderator",
  canDeleteUsers:false
}
//conflicting types
type A = { name: string };
type B = { name: number }; // Conflicting type

type C = A & B; 
/* const userName: C = {
  name: "nik", // Error: 'string' is not assignable to 'number'
}; */
//A & B says name must be both a string and a number at the same time → which is impossible.
// TypeScript resolves the type of name in C as never — meaning no valid value can satisfy both.
//solution-1
type resolvedC = { name: string | number };
const userName: resolvedC = {
  name: "nik123", 
};
//solution-2
// Fix by changing B to allow both types
type BFixed = { name: string | number };
type resolvedTwoC = A & BFixed;

const userNameTwo: resolvedTwoC = {
  name: "nik123", //string(A) and string=>true(BFixed)
};
/* const userNameThree: resolvedTwoC = {
  name: 2, //'number' is not assignable to type 'string'
  
  string(A) and number(BFixed)=>false
}; */

