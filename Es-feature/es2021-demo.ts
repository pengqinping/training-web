// ES2021 (ES12) 核心特性演示
// 1. String.prototype.replaceAll()
const sentence = "I like apples. Apples are my favorite fruit. An apple a day keeps the doctor away.";

// 替换所有匹配项（不使用正则表达式）
const replaced = sentence.replaceAll("apple", "orange");
console.log("replaceAll example:");
console.log(replaced);

// 2. Promise.any()
const promise1 = Promise.reject("Error 1");
const promise2 = Promise.resolve("Success 2");
const promise3 = Promise.resolve("Success 3");

// 返回第一个成功的Promise
Promise.any([promise1, promise2, promise3])
  .then(result => {
    console.log("\nPromise.any result:", result); // "Success 2"
  })
  .catch(errors => {
    console.error("All promises failed:", errors);
  });

// 3. 逻辑赋值运算符
let userPreferences = {
  theme: "light",
  notifications: undefined,
  layout: null
};

// ||=: 左侧为假值时才赋值
userPreferences.theme ||= "dark";       // 保持"light"
userPreferences.notifications ||= true; // 设置为true

// &&=: 左侧为真值时才赋值
userPreferences.layout &&= "grid";      // 保持null（因为左侧是null假值）

// ??=: 左侧为null/undefined时才赋值
userPreferences.layout ??= "list";      // 设置为"list"（因为左侧是null）

console.log("\nLogical assignment examples:");
console.log(userPreferences);
// { theme: 'light', notifications: true, layout: 'list' }

// 4. 数值分隔符
const largeNumber = 1_000_000_000;      // 10亿
const preciseNumber = 0.000_000_001;    // 1纳秒
console.log("\nNumeric separators:");
console.log(largeNumber);  // 1000000000
console.log(preciseNumber); // 0.000000001