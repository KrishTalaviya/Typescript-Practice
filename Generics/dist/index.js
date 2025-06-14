"use strict";
var _a;
console.log("hello");
const nums = [1, 2, 3];
const inputElement = document.querySelector("#input");
inputElement.value = "hello";
function identity(item) {
    return item;
}
function myGenerics(item) {
    return item;
}
myGenerics(7);
myGenerics({ name: "kitty", age: 2 });
function getRandomElementFromArrayOfAnyType(list) {
    return list[Math.floor(Math.random() * list.length)];
}
console.log(getRandomElementFromArrayOfAnyType(["a", "b", "c"]));
//type inferring
console.log(getRandomElementFromArrayOfAnyType([true, false, true]));
//generics with multi parameter
function merge(objectOne, objectTwo) {
    return Object.assign(Object.assign({}, objectOne), objectTwo);
}
const combine = merge({ name: "nik" }, { pet: ["golu", "molu"] });
const combineTwo = merge({ name: "nik" }, 9);
console.log(combineTwo); //{"name": "nik","pet": ["golu","molu"]}
console.log(combineTwo); //{"name": "nik"} 
function mergeTwoObject(objectOne, objectTwo) {
    return Object.assign(Object.assign({}, objectOne), objectTwo);
}
const combineObj = merge({ name: "nik" }, { pet: ["golu", "molu"] });
console.log(combineObj);
function getLengthDouble(obj) {
    return obj.length * 2;
}
console.log(getLengthDouble("hello"));
console.log(getLengthDouble([1, 2]));
//console.log(getLengthDouble(combineObj));//Property 'length' is missing in type '{ name: string; } & { pet: string[]; }' but required in type 'Lengthy'.ts.
console.log([1, 2, 3]);
//default type in generic function
function makeEmptyArray(obj) {
    return [];
}
console.log(makeEmptyArray([1, 2, 3]));
console.log(makeEmptyArray("hello"));
//generic class
class ApiResponse {
    constructor(success, data, errorMessage = null) {
        this.success = success;
        this.data = data;
        this.errorMessage = errorMessage;
    }
    isSuccess() {
        return this.success && this.data !== null;
    }
}
const userResponse = new ApiResponse(true, { id: 1, name: "Alice" });
if (userResponse.isSuccess()) {
    console.log("User:", (_a = userResponse.data) === null || _a === void 0 ? void 0 : _a.name);
}
