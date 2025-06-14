const emptyArray:[]=[];//The type [] says: “I will never accept any items.”
//emptyArray.push(1)//Argument of type '1' is not assignable to parameter of type 'never'.
const arr = []; // inferred as never[]
//arr.push(1); // ❌ Argument of type '1' is not assignable to parameter of type 'never'
const arrOne = [] as number[];
arrOne.push(1); // ✅ OK


const evens:number[]=[2,4,6,8];
evens.push(10);
const odds=[1,3,5]//implicit odd
//evens.push("as")//Argument of type 'string' is not assignable to parameter of type 'number'.



const admins:string[]=["hello",'world'];
const users= [1, "asd", false, undefined];//implicit-(string | number | boolean | undefined)[]
const activeUsers:any[]=[1,'asd',false,undefined];

//alternate syntax
const isActive:Array<boolean>=[true,false];

/* type Coordinate = {//aready declared in objects.ts
  x: number;
  y: number;
  z?: number; //optional parameter
}; */

//array of objects
const clusterOfPoints:Coordinate[]=[];
//clusterOfPoints.push({ x: 2, y: "hh" });
clusterOfPoints.push({ x: 2, y:3});
clusterOfPoints.push({ x: 2, y: 3,z:-6 });

//multi-dimensional array
const ticTacBoard: string[][] = [
  ["x", "o", "x"],
  ["x", "o", "x"],
  ["x", "o", "x"],
];
const threeDNumbers:number[][][]=[[[1,2],[2]],[[1],[4,5]]]
//number[][][] === Array<Array<Array<number>>>

