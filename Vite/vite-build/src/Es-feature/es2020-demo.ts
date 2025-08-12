// ES2020 (ES11) 核心特性演示
// 1. 可选链运算符 (?.)
interface User {
  name: string;
  address?: {
    street?: string;
    city: string;
    zipCode?: string;
  };
}

const user1: User = {
  name: "Alice",
  address: {
    city: "New York"
  }
};

const user2: User = {
  name: "Bob"
  // 没有address属性
};

// 安全访问嵌套属性，无需层层判断
const user1Street = user1.address?.street; // undefined (不会报错)
const user2City = user2.address?.city;     // undefined (不会报错)

console.log("Optional chaining examples:");
console.log(`User1 street: ${user1Street ?? "N/A"}`);
console.log(`User2 city: ${user2City ?? "N/A"}`);

// 2. 空值合并运算符 (??)
const config = {
  theme: "",          // 空字符串是有效值
  layout: undefined,  // 未定义，使用默认值
  pagination: null    // null，使用默认值
};

// 只有当左侧为null/undefined时才使用右侧值
const theme = config.theme ?? "light";      // "" (空字符串不是null/undefined)
const layout = config.layout ?? "grid";      // "grid" (undefined使用默认值)
const pagination = config.pagination ?? true; // true (null使用默认值)

console.log("\nNullish coalescing examples:");
console.log(`Theme: ${theme}`);
console.log(`Layout: ${layout}`);
console.log(`Pagination: ${pagination}`);

// 3. BigInt
const bigNumber = 123456789012345678901234567890n;
console.log("\nBigInt example:");
console.log(`Big number: ${bigNumber}`);
console.log(`Addition: ${bigNumber + 1n}`); // 必须使用n后缀进行运算