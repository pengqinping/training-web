// ES2018 (ES9) 核心特性演示
// 1. 异步迭代器 for-await-of
async function* asyncDataGenerator() {
  yield Promise.resolve("Data 1");
  yield Promise.resolve("Data 2");
  yield Promise.resolve("Data 3");
}

// 使用for-await-of遍历异步迭代器
const processAsyncData = async () => {
  console.log("Processing async data:");
  for await (const data of asyncDataGenerator()) {
    console.log(`  Received: ${data}`);
  }
};

processAsyncData();

// 2. 对象展开运算符
const defaultConfig = { theme: "light", layout: "grid", pagination: true };
const userConfig = { theme: "dark", showSidebar: true };

// 合并配置对象，用户配置覆盖默认配置
const finalConfig = { ...defaultConfig, ...userConfig };
console.log("Merged config:", finalConfig);
// { theme: 'dark', layout: 'grid', pagination: true, showSidebar: true }

// 3. Promise.prototype.finally()
const fetchWithFinally = async () => {
  console.log("\nStarting data fetch...");
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log("Fetch successful:", data);
    return data;
  } catch (error) {
    console.error("Fetch failed:", error);
  } finally {
    // 无论成功失败都会执行的清理操作
    console.log("Fetch operation completed (finally block executed)");
  }
};

fetchWithFinally();