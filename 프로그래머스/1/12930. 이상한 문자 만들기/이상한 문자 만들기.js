function solution(s) {
    var answer = s.split(' ');
    
    for (i = 0; i<answer.length; i ++ ){
        let ans = [...answer[i]]
        for (j = 0; j<answer[i].length; j++){
            if(j % 2) {
                ans[j] = ans[j].toLowerCase()
            } else {
                ans[j] = ans[j].toUpperCase()
            }
        }
        answer[i] = ans.join('')
    }
        
    return answer.join(' ');
}