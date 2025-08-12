// ES2019 (ES10) 核心特性演示
// 1. Array.prototype.flat() 和 flatMap()
const nestedArray = [1, 2, [3, 4, [5, 6]], 7];

// 数组扁平化
const flatArray = nestedArray.flat(2); // 参数为深度，默认1
console.log("Flat array (depth 2):", flatArray); // [1, 2, 3, 4, 5, 6, 7]

// flatMap: 先map后flat(1)
const numbers = [1, 2, 3, 4];
const mapped = numbers.flatMap(num => [num * 2, num * 3]);
console.log("flatMap result:", mapped); // [2, 3, 4, 6, 6, 9, 8, 12]

// 2. String.prototype.trimStart() 和 trimEnd()
const messyString = "   Hello World!   ";
const trimmedStart = messyString.trimStart();
const trimmedEnd = messyString.trimEnd();
const trimmedBoth = messyString.trim();

console.log("\nTrim examples:");
console.log(`Original: [${messyString}]`);
console.log(`trimStart: [${trimmedStart}]`);
console.log(`trimEnd: [${trimmedEnd}]`);
console.log(`trim: [${trimmedBoth}]`);

// 3. Object.fromEntries()
const entries = [
  ["name", "Alice"],
  ["age", 30],
  ["hobbies", ["reading", "coding"]]
];

// 从键值对数组创建对象
const person = Object.fromEntries(entries);
console.log("\nObject from entries:", person);
// { name: 'Alice', age: 30, hobbies: ['reading', 'coding'] }