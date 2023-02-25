const myString = "あいうえお";

// 先頭から参照
console.log(myString.at(1)); // "い"
console.log(myString[1]); // "い"

// 末尾から参照
console.log(myString[myString.length - 2]); // "え"
console.log(myString.at(-2)); // "え"
