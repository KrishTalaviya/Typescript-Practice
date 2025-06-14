

 enum things {
  FOOD = "Food",
  RENT = "Rent",
  ENTERTAINMENT = "Entertainment",
  OTHER = "Other",
}
 enum Operation {
  INCOME = "Income",
  EXPENSE = "Expense",
}
 interface Transaction {
  id:number
  title: string;
  amount: number;
  category: things;
  operation: Operation;
  date: Date;
}
type Statement=[totalIncome:number,totalExpense:number,balance:number];
let count=0;

const transactions: Transaction[] = [];
let statement:Statement=[0,0,0];
document.addEventListener("DOMContentLoaded", () => {
  renderTransactions(transactions);
});

const form = document.querySelector("#transaction-form") as HTMLFormElement;
form.addEventListener("submit", addTransaction);
function addTransaction(e: SubmitEvent) {
  e.preventDefault();

  const transactionForm = e.target as HTMLFormElement;
  const titleInput =
    transactionForm.querySelector<HTMLInputElement>("#title")!.value;
  const amountInput =
    transactionForm.querySelector<HTMLInputElement>("#amount")!.value;
  const categorySelected =
    transactionForm.querySelector<HTMLSelectElement>("#category")!.value;
  const operationSelected =
    transactionForm.querySelector<HTMLSelectElement>("#type")!.value;
  const dateInput =
    transactionForm.querySelector<HTMLInputElement>("#date")!.value;
    console.log(categorySelected)
    let confirmedCategory:things;
    let confirmOperation:Operation;
  if (isMyThing(categorySelected)&& isMyOperation(operationSelected)) {
       confirmedCategory=categorySelected;
       confirmOperation=operationSelected;
  }
  
  let transaction: Transaction = {
    id:++count,
    title: titleInput,
    amount: parseFloat(amountInput),
    category: confirmedCategory!,
    operation: confirmOperation!,
    date: new Date(dateInput),
  };
  transactions.push(transaction);
  
  console.log(transactions);
  renderTransactions(transactions);
  updateBalance(transactions);
}
function renderTransactions(transactions:Transaction[]):void{
  const tbody = document.querySelector<HTMLTableSectionElement>(
    "#tbody"
  )!;
  tbody.innerHTML="";
  if (!tbody) {
    console.error("Could not find tbody element");
    return;
  }
  

    transactions.forEach((tx) => {
      const tr = document.createElement("tr")!;
      tr.innerHTML = `
      <td>${tx.id}</td>
      <td>${tx.title}</td>
      <td>${tx.amount.toFixed(2)}</td>
      <td>${tx.category}</td>
      <td>${tx.operation}</td>
      <td>${tx.date.toLocaleString()}</td>
    `;
      tbody.appendChild(tr);
      
    });
  

  
  

}
function updateBalance(transactions:Transaction[]){
  const initialStatement:Statement=[0,0,0]
  statement=transactions.reduce((acc:Statement,val:Transaction)=>{
    if(val.operation==="Income"){
      initialStatement[0]+=val.amount;
    }
    else{
      initialStatement[1]+=val.amount;
    }
    let income=initialStatement[0];
    let expense=initialStatement[1];
    initialStatement[2]=income-expense;
    return initialStatement;
  },initialStatement)
  displayStatement(statement);
}
function displayStatement(statement:Statement){
  const balanceParagraph=document.querySelectorAll<HTMLParagraphElement>('p')!;
  for(let i=0;i<balanceParagraph.length;i++){
    
    balanceParagraph[i].textContent=statement[i].toString();
  }

}
function isMyThing(category: any): category is things {
  return Object.values(things).includes(category); //enum and type predicate
}
function isMyOperation(operation: any): operation is Operation {
  return Object.values(Operation).includes(operation); //enum and type predicate
}
