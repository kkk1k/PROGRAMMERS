function binarySearch(arr, n) {
  let left = 0;
  let right = arr.length - 1;
  let mid = 0;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === n) {
      return mid;
    } else if (arr[mid] > n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 7));
