function repeatString(str, n){
let result = "";
for(let i = 0; i <= n; i++){
result += str;
}
return result
}
let resultFromFunction = repeatString("String", 2);
console.log(resultFromFunction);