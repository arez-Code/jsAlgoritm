function linearSearch(arr , item){
  for(const element of arr){
    if(element === item) return "found"
  }
    return "not found"
}

console.log(linearSearch([1,2,3,4,5,6],2));