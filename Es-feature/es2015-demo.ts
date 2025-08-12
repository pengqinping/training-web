// ES2015 (ES6) 核心特性演示：类与箭头函数
class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // 箭头函数演示
  greet = () => {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old`;
  }

  // 模板字符串与解构赋值演示
  getDetails = () => {
    const { name, age } = this;
    return `Name: ${name}, Age: ${age}`;
  }
}

// 使用示例
const person = new Person("Alice", 30);
console.log(person.greet());
console.log(person.getDetails());

// Promise 演示
const fetchData = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 1000);
  });
};

// 箭头函数与Promise结合
fetchData().then(result => console.log(result));