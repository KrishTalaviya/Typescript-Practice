function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}
console.log(getFirstElement<string>(["ads", "gdhh"]));
type A = string | number;
console.log(getFirstElement<A>(["ads", 3]));
console.log(getFirstElement<number>([])); //undefined
const firstNum = getFirstElement([1, 2, 3]); // number | undefined
const firstStr = getFirstElement(["a", "b"]); // string | undefined
const firstObj = getFirstElement([{ id: 1 }, { id: 2 }]); // { id: number } | undefined
//Create a generic function that safely gets a property value from an object by key.
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }