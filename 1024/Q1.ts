// 題目 1: 使用 const 和 let 聲明變數
const a: number = 1;
a = 2;
console.log(a); // error TS2588: Cannot assign to 'a' because it is a constant.

let b: number = 10;
b = 20;
console.log(b);
