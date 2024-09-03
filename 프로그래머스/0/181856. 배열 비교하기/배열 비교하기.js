function solution(arr1, arr2) {
    var answer = 0;
    const sum1 = arr1.reduce((a, b) => a + b, 0);
    const sum2 = arr2.reduce((a, b) => a + b, 0);
    if (arr1.length == arr2.length) {

        answer = sum1 > sum2 ? 1 : (sum1 < sum2 ? -1 : 0)
    } else if (arr1.length !== arr2.length) {
        answer = arr1.length > arr2.length ?  1: (arr1.length == arr2.length ?  0:-1)
    }
    return answer ;
}