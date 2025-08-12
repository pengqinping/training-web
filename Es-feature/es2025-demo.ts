// ES2025 核心特性演示
// 1. Float16Array (16位浮点数数组)
const float16Buffer = new ArrayBuffer(8); // 8字节可存储4个float16
const float16Array = new Float16Array(float16Buffer);

// 填充数据
float16Array[0] = 3.14;
float16Array[1] = 0.0001;
float16Array[2] = -123.45;
float16Array[3] = Math.PI;

console.log("Float16Array example:");
console.log("Array values:", float16Array);
console.log("Buffer byte length:", float16Buffer.byteLength); // 8字节

// DataView操作float16
const dataView = new DataView(float16Buffer);
const firstValue = dataView.getFloat16(0); // 从偏移量0读取float16
console.log("First value from DataView:", firstValue);

// 2. Promise.try() - 简化错误处理
const mightThrow = (shouldThrow: boolean): string => {
  if (shouldThrow) {
    throw new Error("Intentional error");
  }
  return "Success result";
};

// 使用Promise.try()包装可能抛出的同步函数
console.log("\nPromise.try() examples:");
Promise.try(() => mightThrow(false))
  .then(result => console.log("Success case:", result))
  .catch(error => console.error("Error case:", error.message));

Promise.try(() => mightThrow(true))
  .then(result => console.log("Success case:", result))
  .catch(error => console.error("Error case:", error.message));

// 3. Temporal API - 日期时间处理
// 注意：Temporal API在ES2025中正式加入，提供更强大的日期时间处理
const today = Temporal.Now.plainDateISO();
const tomorrow = today.add({ days: 1 });
const nextWeek = today.add({ weeks: 1 });

console.log("\nTemporal API examples:");
console.log("Today:", today.toString());
console.log("Tomorrow:", tomorrow.toString());
console.log("Next week:", nextWeek.toString());

// 日期差异计算
const birthday = Temporal.PlainDate.from("1990-05-15");
const age = today.since(birthday).years;
console.log("Age:", age);