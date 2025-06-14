import { type Product } from "../models/item";

/*  function ShoppingList(){
    const items = [
      { id: 1, productName: "Nike", quantity: 2 },
      { id: 2, productName: "Adidas", quantity: 3 },
    ];
    return (
      <div>
        <ul>
          {items.map((item) => {
            return <li key={item.id}>
              {item.productName}-{item.quantity}
            </li>;
          })}
        </ul>
      </div>
    );
} */

interface ShoppingList{
    items:Product[];
}

    function ShoppingList({items}:ShoppingList) {
      
      return (
        <div>
          <ul>
            {items.map((item) => {
                {
                  console.log(item.id);
                }
              return (
                <li key={item.id}>
                    
                  {item.productName}-{item.quantity}
                </li>
              );
            })}
          </ul>
        </div>
      );
    } 

export default ShoppingList;