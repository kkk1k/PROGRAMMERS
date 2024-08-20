function solution(arr) {
    var answer = [];
    for(i=0;i<arr.length;i++) {
        if(arr[i] % 2 == 0 && arr[i] >= 50 ){
            answer[i] = arr[i]/2
        } else if(arr[i] % 2 == 1 && arr[i] < 50){
            answer[i] = arr[i]*2
        } else {
            answer[i] = arr[i]
        }
    }
    return answer;
}