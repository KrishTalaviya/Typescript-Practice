// export class Transaction {
//   constructor(id, description, amount, type) {
//     this.id = id;
//     this.description = description;
//     this.amount = amount;
//     this.type = type; // 'income' | 'expense'
//   }
// }
interface TransactionType{
 readonly id:number,
 description:string,
 amount:number,
 type:'income' | 'expense'
}
export class Transaction implements TransactionType{
    type: "income" | "expense";
constructor(public id:number,public description:string,public amount:number,typePassed:"income" | "expense"){
    this.type=typePassed;
}
}
