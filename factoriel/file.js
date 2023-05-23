// function fuctoriel(num){
//   if(num === 0 || num === 1){
//     return 1;
//   }
//   for(let i = num - 1; i >= 1; i--){
//     num = num * i;
//   }
//   return num;
// }

// console.log(fuctoriel(39));
function recursiveFactorial(num) {
  if (num === 0 || num === 1) {
      return 1;
  }
  return num * recursiveFactorial(num - 1);
}
console.log(recursiveFactorial(4));