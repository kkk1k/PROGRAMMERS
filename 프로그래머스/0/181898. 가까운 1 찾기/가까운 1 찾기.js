function solution(arr, idx) {
    var answer = -1;
    for (i = idx; i<arr.length ; i++) {
        if(arr[i]==1){
            return i
        }
    }
    return answer;
}