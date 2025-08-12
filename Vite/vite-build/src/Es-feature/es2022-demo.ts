// ES2022 (ES13) 核心特性演示
// 1. 类私有字段与方法
class BankAccount {
  // 公有字段
  accountNumber: string;
  // 私有字段（#前缀）
  #balance: number;
  #ownerName: string;

  constructor(accountNumber: string, ownerName: string, initialBalance: number = 0) {
    this.accountNumber = accountNumber;
    this.#ownerName = ownerName;
    this.#balance = initialBalance;
  }

  // 公有方法
  getBalance(): number {
    return this.#balance;
  }

  // 私有方法
  #validateTransaction(amount: number): boolean {
    return amount > 0 && this.#balance >= amount;
  }

  // 公有方法调用私有方法
  withdraw(amount: number): boolean {
    if (this.#validateTransaction(amount)) {
      this.#balance -= amount;
      return true;
    }
    return false;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.#balance += amount;
    }
  }

  // 静态私有字段
  static #bankName = "TechBank";
  
  // 静态方法访问静态私有字段
  static getBankName(): string {
    return BankAccount.#bankName;
  }
}

const account = new BankAccount("12345678", "Alice", 1000);
console.log("BankAccount example:");
console.log(`Account number: ${account.accountNumber}`);
console.log(`Initial balance: $${account.getBalance()}`);

account.withdraw(200);
console.log(`Balance after withdrawal: $${account.getBalance()}`);

account.deposit(500);
console.log(`Balance after deposit: $${account.getBalance()}`);

console.log(`Bank name: ${BankAccount.getBankName()}`);

// 尝试访问私有字段会报错（在TypeScript中编译时会报错）
// console.log(account.#balance); // Error: Private field '#balance' must be declared in an enclosing class

// 2. Top-level await (在模块顶层使用await)
console.log("\nTop-level await example:");
const fetchData = async () => {
  const response = await fetch("https://api.example.com/data");
  return response.json();
};

// 注意：在TypeScript中使用top-level await需要将文件保存为.mts扩展名或配置module: esnext
// 此处仅为演示语法
try {
  const data = await fetchData();
  console.log("Fetched data:", data);
} catch (error) {
  console.error("Error fetching data:", error);
}