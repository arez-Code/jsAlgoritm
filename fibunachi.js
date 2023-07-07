// function fib(n){
//   const result = [0,1];

//   for(let i = 2; i <= n; i++){
//     let a = result[i - 1];
//     let b = result[i - 2];

//      result.push(a + b);
//   }
//   return result[n]
// }
// console.log(fib(1));

// summary

function fib(n){
  if(n < 2){
    return n;
  }
  return fib(n - 2) + fib(n - 1);
}
console.log(fib(6));