// ES2024 核心特性演示
// 1. 正则表达式v标志 (Unicode属性转义与集合运算)
// 匹配所有表情符号（使用Unicode属性）
const emojiRegex = /\p{Emoji}/v;
console.log("Regex v flag examples:");
console.log("Is '😊' an emoji?", emojiRegex.test("😊")); // true
console.log("Is 'a' an emoji?", emojiRegex.test("a"));   // false

// 集合运算：匹配字母或数字但排除元音字母
const regex = /[[a-z0-9]-[aeiou]]/iv;
console.log("Matches 'b'?", regex.test("b")); // true
console.log("Matches 'a'?", regex.test("a")); // false (元音被排除)
console.log("Matches '5'?", regex.test("5")); // true

// 2. 数组分组 Object.groupBy()
interface Product {
  name: string;
  category: string;
  price: number;
}

const products: Product[] = [
  { name: "Laptop", category: "electronics", price: 999 },
  { name: "Mouse", category: "electronics", price: 25 },
  { name: "Shirt", category: "clothing", price: 30 },
  { name: "Pants", category: "clothing", price: 45 },
  { name: "Headphones", category: "electronics", price: 150 }
];

// 按类别分组产品
const groupedByCategory = Object.groupBy(products, product => product.category);

console.log("\nObject.groupBy() example:");
console.log("Electronics:", groupedByCategory.electronics?.map(p => p.name));
console.log("Clothing:", groupedByCategory.clothing?.map(p => p.name));

// 3. ArrayBuffer传输
const sourceBuffer = new ArrayBuffer(16);
const view = new Uint8Array(sourceBuffer);
// 填充原始数据
for (let i = 0; i < 16; i++) {
  view[i] = i;
}

console.log("\nArrayBuffer transfer example:");
console.log("Original buffer byteLength:", sourceBuffer.byteLength); // 16

// 传输ArrayBuffer，原buffer变为0长度
const transferredBuffer = sourceBuffer.transfer();
console.log("Original buffer after transfer:", sourceBuffer.byteLength); // 0
console.log("Transferred buffer byteLength:", transferredBuffer.byteLength); // 16