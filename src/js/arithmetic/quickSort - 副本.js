
function shuffleArray(arr) {
  var arr = arr.slice();
  var len = arr.length;
  var temp, random_index;
  while (len != 0) {
    random_index = Math.round(0 + (len - 1 - 0) * Math.random());
    temp = arr[random_index];
    arr[random_index] = arr[len - 1];
    arr[len - 1] = temp;
    --len;
  }
  return arr;
}

export default shuffleArray;