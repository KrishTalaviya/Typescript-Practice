// ========================= Interfaces =========================

interface Loginable {
    login(password: string): boolean;
  }
  
  interface Purchasable {
    purchase(productId: number, quantity: number): void;
  }
  
  // ========================= Abstract Class =========================
  
  abstract class Person {
    constructor(
      public name: string,
      protected age: number,
      public readonly id: string
    ) {}
  
    abstract getRole(): string;
  
    introduce(): string {
      return `Hi, I'm ${this.name}, my ID is ${this.id}.`;
    }
  }
  
  // ========================= Class: Customer =========================
  
  class Customer extends Person implements Loginable, Purchasable {
    private password: string;
    private cart: { productId: number; quantity: number }[] = [];
  
    constructor(
      name: string,
      age: number,
      id: string,
      password: string,
      private _email: string
    ) {
      super(name, age, id);
      this.password = password;
    }
  
    // Getter and Setter
    get email(): string {
      return this._email;
    }
  
    set email(newEmail: string) {
      if (!newEmail.includes("@")) {
        throw new Error("Invalid email address");
      }
      this._email = newEmail;
    }
  
    login(inputPassword: string): boolean {
      return this.password === inputPassword;
    }
  
    purchase(productId: number, quantity: number): void {
      this.cart.push({ productId, quantity });
      console.log(`${this.name} added ${quantity} of product ${productId} to cart.`);
    }
  
    getRole(): string {
      return "Customer";
    }
  
    viewCart(): void {
      console.log(this.cart);
    }
  }
  
  // ========================= Class: Admin =========================
  
  class Admin extends Person implements Loginable {
    constructor(name: string, age: number, id: string, private password: string) {
      super(name, age, id);
    }
  
    login(inputPassword: string): boolean {
      return this.password === inputPassword;
    }
  
    getRole(): string {
      return "Admin";
    }
  
    banUser(userId: string): void {
      console.log(`${this.name} banned user with ID: ${userId}`);
    }
  }
  
  // ========================= Class: Product =========================
  
  class Product {
    // Parameter properties, public & readonly
    constructor(
      public readonly id: number,
      public name: string,
      private stock: number,
      private price: number
    ) {}
  
    isAvailable(): boolean {
      return this.stock > 0;
    }
  
    sell(quantity: number): void {
      if (quantity > this.stock) {
        console.log("Not enough stock.");
        return;
      }
      this.stock -= quantity;
      console.log(`${quantity} of ${this.name} sold.`);
    }
  
    get currentStock(): number {
      return this.stock;
    }
  
    get productPrice(): number {
      return this.price;
    }
  }
  
  // ========================= DEMO =========================
  
  const alice = new Customer("Alice", 25, "C001", "alice123", "alice@example.com");
  console.log(alice.introduce());              // Inherited from abstract class
  console.log(alice.getRole());                // "Customer"
  console.log("Login:", alice.login("alice123"));
  alice.purchase(101, 2);                      // Adds to cart
  alice.email = "newalice@example.com";        // Setter
  console.log("Email:", alice.email);          // Getter
  alice.viewCart();                            // View cart
  
  const admin = new Admin("Bob", 40, "A001", "adminpass");
  console.log(admin.getRole());
  console.log("Admin login:", admin.login("adminpass"));
  admin.banUser("C001");
  
  const laptop = new Product(101, "Laptop", 10, 1200);
  console.log(`Stock available: ${laptop.isAvailable()}`);
  laptop.sell(3);
  console.log(`Remaining stock: ${laptop.currentStock}`);
  console.log(`Price: $${laptop.productPrice}`);
  