export class Transaction {
    constructor(id, description, amount, typePassed) {
        this.id = id;
        this.description = description;
        this.amount = amount;
        this.type = typePassed;
    }
}
