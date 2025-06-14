// export function renderTransactions(transactions, listElement) {
//   listElement.innerHTML = "";
//   transactions.forEach((tx) => {
//     const li = document.createElement("li");
//     li.className = tx.type;
//     li.textContent = `${tx.description}: $${tx.amount}`;
//     listElement.appendChild(li);
//   });
// }
export function renderTransactions(transactions, listElement) {
    listElement.innerHTML = "";
    transactions.forEach((tx) => {
        const li = document.createElement("li");
        li.className = tx.type;
        li.textContent = `${tx.description}: $${tx.amount}`;
        listElement.appendChild(li);
    });
}
export function updateBalance(transactions, balanceElement) {
    const total = transactions.reduce((acc, tx) => {
        return tx.type === "income" ? acc + tx.amount : acc - tx.amount;
    }, 0);
    balanceElement.textContent = total.toFixed(2);
}
