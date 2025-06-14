/* import Greeter from "./Components/Greeter";
import GreeterPerson from "./Components/GreeterPerson"; */
 import { useEffect, useState } from 'react';
import ShoppingList from './Components/ShoppingList';
import { type Product } from './models/item'; 
import ShoppingListForm from "./Components/ShoppingListForm";




function App() {
  const [items, setItems] = useState<Product[]>([]);
  const [lastAdded, setLastAdded] = useState<Product | null>(null);
  const num:number=23;
  console.log(num);
 /*  const items = [
    { id: 1, productName: "Nike", quantity: 2 },
    { id: 2, productName: "Adidas", quantity:2},
  ]; */
  function OnAddProduct(item: Product) {
    console.log("Passed data from child element");
    setItems((prev) => [...prev, item]);
    setLastAdded(item); // trigger the fetch
  }
  useEffect(() => {
    if (!lastAdded) return;

    fetch("http://localhost:3000/products/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // ✅ correct MIME type
      },
      body: JSON.stringify(lastAdded),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Response from backend:", data);
      })
      .catch((err) => {
        console.error("Fetch error:", err); // 🔴 You will see ERR_FAILED here if there's a CORS or server issue
      });
  }, [lastAdded]);
  return (
    <>
      {/* <Greeter />
      <GreeterPerson name={"Nik"} age={5}/> */}
      <h1>Shopping List</h1>
      <ShoppingListForm addItem={OnAddProduct}></ShoppingListForm>
      <ShoppingList items={items}></ShoppingList> 

    </>
  )
}

export default App
