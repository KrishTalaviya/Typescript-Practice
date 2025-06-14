import { TransactionType,Transaction,Type } from "./transcations.js";
import { generateId } from "./utils.js";
import { renderTransactions,updateBalance } from "./ui.js";

const form = document.getElementById("transaction-form")! as HTMLFormElement;
const descriptionInput = document.getElementById("description")! as HTMLInputElement;
const amountInput = document.getElementById("amount")! as HTMLInputElement;
const typeSelect = document.getElementById("type")! as HTMLSelectElement;
const listElement = document.getElementById("transaction-list")! as HTMLUListElement;
const balanceElement = document.getElementById("balance")! as HTMLSpanElement;
let transactions :TransactionType[]= [];
form.addEventListener('submit',(e:SubmitEvent)=>{
    e.preventDefault();
    const description = descriptionInput?.value.trim();
    const amount = parseFloat(amountInput?.value);
   
        const type = typeSelect?.value;

    
   
    if(!description || isNaN(amount))return;
    
    const tx:Transaction= new Transaction(generateId(), description, amount, isTypeEnum(type));
    transactions.push(tx);
    renderTransactions(transactions, listElement);
    updateBalance(transactions, balanceElement);

    form.reset();
})
function isTypeEnum(myType:string){
    if(myType === Type.EXPENSE){
        return Type.EXPENSE
    }
    return Type.INCOME;
}