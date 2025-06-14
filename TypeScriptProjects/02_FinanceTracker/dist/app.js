import { Transaction, Type } from "./transcations.js";
import { generateId } from "./utils.js";
import { renderTransactions, updateBalance } from "./ui.js";
const form = document.getElementById("transaction-form");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const typeSelect = document.getElementById("type");
const listElement = document.getElementById("transaction-list");
const balanceElement = document.getElementById("balance");
let transactions = [];
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const description = descriptionInput === null || descriptionInput === void 0 ? void 0 : descriptionInput.value.trim();
    const amount = parseFloat(amountInput === null || amountInput === void 0 ? void 0 : amountInput.value);
    const type = typeSelect === null || typeSelect === void 0 ? void 0 : typeSelect.value;
    if (!description || isNaN(amount))
        return;
    const tx = new Transaction(generateId(), description, amount, isTypeEnum(type));
    transactions.push(tx);
    renderTransactions(transactions, listElement);
    updateBalance(transactions, balanceElement);
    form.reset();
});
function isTypeEnum(myType) {
    if (myType === Type.EXPENSE) {
        return Type.EXPENSE;
    }
    return Type.INCOME;
}
