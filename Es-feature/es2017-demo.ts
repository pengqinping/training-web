// ES2017 (ES8) 核心特性演示
// 1. async/await 语法
const fetchUserData = async (userId: number): Promise<{ id: number; name: string }> => {
  // 模拟API调用
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: userId, name: `User${userId}` });
    }, 1000);
  });
};

// 使用async/await简化异步代码
const getUserData = async () => {
  try {
    console.log("Fetching user data...");
    const user = await fetchUserData(1);
    console.log("User data:", user);
    return user;
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

getUserData();

// 2. Object.values() 和 Object.entries()
const person = { name: "Alice", age: 30, city: "New York" };

// 获取对象所有值
const values = Object.values(person);
console.log("Object values:", values); // ['Alice', 30, 'New York']

// 获取对象所有键值对
const entries = Object.entries(person);
console.log("Object entries:");
entries.forEach(([key, value]) => {
  console.log(`  ${key}: ${value}`);
});