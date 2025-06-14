import type { JSX } from "react";
import { useRef } from "react";
import { v4 as getId } from "uuid";
import type { Product } from "../models/item";
interface ShoppingListFormProp{
    addItem(item:Product):void;
}
export default function ShoppingListForm({addItem}:ShoppingListFormProp):JSX.Element{
    const productInputRef=useRef<HTMLInputElement>(null);
    const quantityInputRef=useRef<HTMLInputElement>(null);
    function handleSubmit(event:React.FormEvent){
        event.preventDefault();
        addItem({id:getId(),productName:productInputRef.current!.value,quantity:parseInt(quantityInputRef.current!.value)});
        productInputRef.current!.value="";
        quantityInputRef.current!.value="";
    }
    return (
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='product name' ref={productInputRef} />
        <input type='number' placeholder='quantity' ref={quantityInputRef} />
        <button type='submit'>Submit</button>
      </form>
    );
}
 