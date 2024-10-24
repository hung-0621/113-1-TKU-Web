// 題目 1: 使用 const 和 let 聲明變數
const age: number = 25
age = 18;
console.log(age); // error TS2588: Cannot assign to 'a' because it is a constant.

let Name: string = "Alice";
Name = "Kenny";
console.log(Name);
