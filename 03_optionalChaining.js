const userData = {
  name: "鈴木",
  // addressはデータによっては存在しないかもしれない
  address: {
    city: "港区"
  }
};


const city = userData.address && userData.address.city;
console.log(city);
// 結果: addressがある場合は「港区」が出力される

// const city = userData.address?.city;
// console.log(city);
