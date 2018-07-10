//1、外层 for 循环控制循环次数
//2、内层 for 循环进行两数交换，找每次的最大数，排到最后
//3、设置一个标志位，减少不必要的循环

// 作者:FEWY
// 地址:https://segmentfault.com/a/1190000014175918
const bubbleSort = function(arr) {
  var max = arr.length - 1;
  for (var j = 0; j < max; j++) {
    // 声明一个变量，作为标志位
    var done = true;
    for (var i = 0; i < max - j; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        done = false;
      }
    }
    if (done) {
      break;
    }
  }
  return arr;
}

export default bubbleSort