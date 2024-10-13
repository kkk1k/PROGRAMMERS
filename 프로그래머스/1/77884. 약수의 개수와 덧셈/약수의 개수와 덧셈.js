function solution(left, right) {
    var answer = 0;
    for(i=left; i<= right;i++){
        let lst = []
        for (j=1;j<=i;j++){
            if(i%j === 0 ){
                lst.push(j)
            }
        }
        if (lst.length % 2) {
            answer -= i
        } else {
            answer += i
        }       
    }
    return answer;
}