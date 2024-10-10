function solution(arr) {
    if(arr.length === 1){
        return [-1]
    }
    var answer = 99999999999
    var idx = 0
    for(i=0;i<arr.length;i++){
        if(arr[i]<answer){
            idx = i
            answer = arr[i]
        }
    }
    
    
    
    return arr.filter((a,b)=> b!==idx);
}