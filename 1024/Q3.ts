// 題目 3: 輸出 99 乘法表的函數
function printMultiplicationTable(): void {
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            console.log(`${i} * ${j} = ${i * j}`);
        }
    }
}
printMultiplicationTable();
