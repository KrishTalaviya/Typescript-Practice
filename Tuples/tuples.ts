let myTuple:[number,string]=[1,"ghhdh"];
//myTuple=["ghhdh",2]//'string' is not assignable to type 'number
//Optional Element:
let user: [string, number?];
user = ["Alice"];
user = ["Bob", 30];
//Rest Element (at the end only):
let logs: [string, ...number[]] = ["Session1", 10, 20, 30];

//Destructuring Tuples
let userTwo: [number, string] = [1, "Alice"];
let [id, namea] = user;

const color:[number,number,number]=[255,0,255];
type HTTPResponse=[number,string];
const responseOne:HTTPResponse=[200,"Ok"]
//const responseTwo:HTTPResponse = [200, "Ok",3];error
//responseOne[0]="asd"

responseOne.push("sdd");//In TypeScript, even though HTTPResponse is a fixed-length tuple, tuples are technically arrays, and arrays have mutable methods like .push().
//TypeScript does not prevent use of .push() on tuples, even if it breaks the intended tuple length.
responseOne.pop();
const responseThree = [200, "Ok"] as const;
// responseOne.push("sdd"); // ❌ Error: Property 'push' does not exist on type 'readonly [...]'
type HTTPResponseA = readonly [number, string];
const responseFour: HTTPResponseA = [200, "Ok"];
// responseOne.push("sdd"); // ❌ Error






//array of tuples
const responses: HTTPResponse[] = [[200, "Ok"],[404,"Not Found"]];