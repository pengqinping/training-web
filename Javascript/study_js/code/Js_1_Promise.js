// 创建 promise 会立即执行的
let promise = new Promise(function(resolve,reject){
    console.log('Promise');
    resolve();
});

promise.then(function(){
    console.log('resolved.');
});

console.log('HI!');

// Promise中调用 resolve 使等待的状态变为 成功的结束
// Promise中调用 reject 