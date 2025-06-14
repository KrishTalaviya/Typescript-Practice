import type { JSX } from "react";

/* function GreeterPerson(props:{name:string}):JSX.Element{
 return <h1>Hello {props.name} </h1>
} */
interface Person{
    name:string;
    age:number;
}
/* function GreeterPerson(props:Person){
    return <h1>{props.name} is {props.age} old</h1>
} */
    function GreeterPerson({name,age}: Person) {
      return (
        <h1>
          {name} is {age} old
        </h1>
      );
    }
export default GreeterPerson;