// 対象のオブジェクト
const myObject1 = {
  foo: 1
};

const myObject2 = {
  foo: 0
};

const myObject3 = {
  foo: false
};

const myObject4 = {
  foo: null
};


function getFooOr(object) {
  return object.foo || "値なし";
}

console.log(getFooOr(myObject1)); // 結果: 1
console.log(getFooOr(myObject2)); // 結果: ☆「値なし」（0が期待値）
console.log(getFooOr(myObject3)); // 結果: ☆「値なし」（falseが期待値）
console.log(getFooOr(myObject4)); // 結果: 「値なし」


function getFooNco(object) {
  return object.foo ?? "値なし";
}

console.log(getFooNco(myObject1)); // 結果: 1
console.log(getFooNco(myObject2)); // 結果: 0
console.log(getFooNco(myObject3)); // 結果: false
console.log(getFooNco(myObject4)); // 結果: 「値なし」
