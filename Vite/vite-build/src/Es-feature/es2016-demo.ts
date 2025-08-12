// ES2016 (ES7) 核心特性演示
// 1. Array.prototype.includes()
const fruits: string[] = ["apple", "banana", "orange"];
console.log("Includes 'banana':", fruits.includes("banana")); // true
console.log("Includes 'grape':", fruits.includes("grape"));   // false

// 2. 指数运算符 (**)
const base = 2;
const exponent = 3;
const result = base **exponent;
console.log(`${base}^${exponent} =`, result); // 8

// 实际应用：计算圆的面积 (πr²)
const calculateCircleArea = (radius: number): number => {
  return Math.PI** radius **2;
};
console.log("Circle area with radius 5:", calculateCircleArea(5).toFixed(2)); // 78.54