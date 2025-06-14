"use strict";
var things;
(function (things) {
    things["FOOD"] = "Food";
    things["RENT"] = "Rent";
    things["ENTERTAINMENT"] = "Entertainment";
    things["OTHER"] = "Other";
})(things || (things = {}));
var Operation;
(function (Operation) {
    Operation["INCOME"] = "Income";
    Operation["EXPENSE"] = "Expense";
})(Operation || (Operation = {}));
let count = 0;
const transactions = [];
let statement = [0, 0, 0];
document.addEventListener("DOMContentLoaded", () => {
    renderTransactions(transactions);
});
const form = document.querySelector("#transaction-form");
form.addEventListener("submit", addTransaction);
function addTransaction(e) {
    e.preventDefault();
    const transactionForm = e.target;
    const titleInput = transactionForm.querySelector("#title").value;
    const amountInput = transactionForm.querySelector("#amount").value;
    const categorySelected = transactionForm.querySelector("#category").value;
    const operationSelected = transactionForm.querySelector("#type").value;
    const dateInput = transactionForm.querySelector("#date").value;
    console.log(categorySelected);
    let confirmedCategory;
    let confirmOperation;
    if (isMyThing(categorySelected) && isMyOperation(operationSelected)) {
        confirmedCategory = categorySelected;
        confirmOperation = operationSelected;
    }
    let transaction = {
        id: ++count,
        title: titleInput,
        amount: parseFloat(amountInput),
        category: confirmedCategory,
        operation: confirmOperation,
        date: new Date(dateInput),
    };
    transactions.push(transaction);
    console.log(transactions);
    renderTransactions(transactions);
    updateBalance(transactions);
}
function renderTransactions(transactions) {
    const tbody = document.querySelector("#tbody");
    tbody.innerHTML = "";
    if (!tbody) {
        console.error("Could not find tbody element");
        return;
    }
    transactions.forEach((tx) => {
        const tr = document.createElement("tr");
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
function updateBalance(transactions) {
    const initialStatement = [0, 0, 0];
    statement = transactions.reduce((acc, val) => {
        if (val.operation === "Income") {
            initialStatement[0] += val.amount;
        }
        else {
            initialStatement[1] += val.amount;
        }
        let income = initialStatement[0];
        let expense = initialStatement[1];
        initialStatement[2] = income - expense;
        return initialStatement;
    }, initialStatement);
    displayStatement(statement);
}
function displayStatement(statement) {
    const balanceParagraph = document.querySelectorAll('p');
    for (let i = 0; i < balanceParagraph.length; i++) {
        balanceParagraph[i].textContent = statement[i].toString();
    }
}
function isMyThing(category) {
    return Object.values(things).includes(category); //enum and type predicate
}
function isMyOperation(operation) {
    return Object.values(Operation).includes(operation); //enum and type predicate
}
