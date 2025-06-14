//A function that never returns (throws or loops forever)
function throwError(message: string): never {
  throw new Error(message);
}
function infiniteLoop(): never {
  while (true) {}
}
//Exhaustiveness checking in switch statements
type Shape = "circle" | "square";

function getArea(shape: Shape) {
  switch (shape) {
    case "circle":
      return Math.PI * 1 * 1;
    case "square":
      return 1 * 1;
    default:
      const _exhaustiveCheck: never = shape; // ✅ TS will error if a case is missed
      //The shape variable is of type "circle" | "square"
//If you add a new shape (say "triangle") to the Shape type, but forget to add a case for it in 
// the switch, TypeScript will give an error:
      return _exhaustiveCheck;
  }
}
//Type Conflicts (e.g., impossible intersections)
/* type A = { name: string };
type B = { name: number };
type C = A & B; */

// name would be `string & number` → which is `never`


//array
const arrNever=[]//type never