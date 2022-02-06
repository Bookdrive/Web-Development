let arr = [1, 2, 3, 4, 5, 6, 7];
let n = arr.length;

console.log(arr, "\n");
for (let i = 0; i <= n / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[n - 1 - i];
    arr[n - 1 - i] = temp;
}
console.log(arr);