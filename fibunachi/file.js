// function factoriel(num){
//   if(num === 0 || num === 1){
//     return 1;
//   }
//   for(let i = num - 1; i >= 1; i--){
//     num = num * i;
//   }
// }

// console.log(factoriel(4));

function fib(n){
  const result = [0,1];

  for(let i = 2; i <= n; i++){
    let a = result[i - 1];
    let b = result[i - 2];

    result.push(a + b);
  }
  return result[n]
}
console.log(fib(4));
