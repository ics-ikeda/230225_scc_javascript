// 現在時刻の秒数を取得
const second = new Date().getSeconds();

// ゼロパディングされた文字列
let paddedSecond = String(second);

// 10秒未満なら、冒頭に0を付与する
if (second < 10) {
  paddedSecond = "0" + paddedSecond;
}

// 現時刻の秒数 01, 09, 12, ...
console.log(paddedSecond);
