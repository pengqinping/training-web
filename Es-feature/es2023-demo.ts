// ES2023 (ES14) 核心特性演示
// 1. 数组方法增强：toReversed(), toSorted(), with()
const numbers = [3, 1, 4, 1, 5, 9];

// 返回反转后的新数组（原数组不变）
const reversed = numbers.toReversed();
// 返回排序后的新数组（原数组不变）
const sorted = numbers.toSorted((a, b) => a - b);
// 返回修改指定索引后的新数组（原数组不变）
const modified = numbers.with(2, 10); // 将索引2的值改为10

console.log("Original array:", numbers);      // [3, 1, 4, 1, 5, 9]
console.log("toReversed():", reversed);      // [9, 5, 1, 4, 1, 3]
console.log("toSorted():", sorted);          // [1, 1, 3, 4, 5, 9]
console.log("with(2, 10):", modified);       // [3, 1, 10, 1, 5, 9]

// 2. findLast() 和 findLastIndex()
const fruits = [
  { name: "apple", quantity: 5 },
  { name: "banana", quantity: 0 },
  { name: "orange", quantity: 3 },
  { name: "banana", quantity: 7 }
];

// 从数组末尾开始查找
const lastBanana = fruits.findLast(fruit => fruit.name === "banana");
const lastBananaIndex = fruits.findLastIndex(fruit => fruit.name === "banana");

console.log("\nfindLast() example:");
console.log("Last banana:", lastBanana);          // { name: 'banana', quantity: 7 }
console.log("Last banana index:", lastBananaIndex); // 3

// 3. Symbol作为WeakMap键
const key1 = Symbol("uniqueKey1");
const key2 = Symbol("uniqueKey2");

const weakMap = new WeakMap<symbol, string>();
weakMap.set(key1, "Value associated with key1");
weakMap.set(key2, "Value associated with key2");

console.log("\nSymbol as WeakMap key:");
console.log("Value for key1:", weakMap.get(key1)); // "Value associated with key1"
console.log("Value for key2:", weakMap.get(key2)); // "Value associated with key2"

// 4. Hashbang语法（脚本文件开头）
// #!/usr/bin/env node
// console.log("This script can be run directly from command line");
// 注意：实际使用时需将此行放在文件开头，并赋予执行权限