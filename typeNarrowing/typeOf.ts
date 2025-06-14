function toSTr(n:number|string):(number|string){
return n.toString()// both number and string have a toString() method.
}
function multiplyBy3(n:number|string):(number|string){
    if(typeof n ==="string"){
       return  n.repeat(3);
    }
    return n*3;
}