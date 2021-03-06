const bubbleSort_visual = (function() {
  document.getElementById('container').innerHTML = `<div id="main">
    <canvas id="myCanvas" width="600" height="200"> </canvas>
  </div>`;

  document.getElementById('main').style.cssText = 'width:600px;height:200px;position:relative';


  function bubbleSort(arr) {
    // 冒泡排序算法，对数组进行排序，同时记录每一步操作，保存在一个数组中
    function sort() {
      // virtualArr 用来存放 每一个步内容的数组
      var virtualArr = [arr.slice()];
      var max = arr.length;
      for (var i = 0; i < max; i++) {
        var done = true;
        for (var j = 0; j < max - i; j++) {
          if (arr[j] > arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            done = false;
            virtualArr.push(arr.slice());
          }
        };
        if (done) {
          break;
        };
      }
      return virtualArr;
    }

    // 绘画，调用一次就画出一步的图像
    function darw(arr) {
      var canvas = document.getElementById('myCanvas');
      var ctx = canvas.getContext('2d');
      // 获取 canvas画板的高度(确定每个长方形的 y 值时需要)
      var maxWidth = canvas.height;
      // 每个长方形的宽度
      var width = 20;
      // 每个长方形之间的间隔
      var space = 20;

      // 清空画布
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // 设置字体
      ctx.font = "18px serif";
      // 在页面上，画出一步的内容
      for (var i = 0; i < arr.length; i++) {
        ctx.fillStyle = '#61C5FE';
        // x 的 值等于 第i个长方形 * （长方形的宽+每个长方形的间隔）
        // y 的 值等于  画板的高度 - 第i的元素的值
        ctx.fillRect(i * (width + space), maxWidth - arr[i], width, arr[i]);
        ctx.fillStyle = '#240be4';
        // maxWidth - arr[i]-5，这里多- 5，是为了能让文字，在长方形上方一点显示，看的明显些
        ctx.fillText(arr[i], i * (width + space), maxWidth - arr[i] - 5);
      }
    }

    // 动画
    function animation() {
      // 调用sort 方法，返回包括每一步内容的数组
      var virtualArr = sort();
      var interval = 500;
      // 遍历得到的数组，每隔500ms，调用darw 方法，画出一步内容
      virtualArr.forEach((item, index) => {
        setTimeout(() => darw(item), index * interval);
      });
    }

    animation();
  }
  var arr = [50, 40, 20, 10, 10];
  bubbleSort(arr);
})();

export default bubbleSort_visual;