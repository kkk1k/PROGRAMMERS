function solution(intStrs, k, s, l) {
    var answer = [];
    
    for (var i = 0; i < intStrs.length; i++) {
        // 각 문자열에서 s번 인덱스부터 시작하는 l 길이의 부분 문자열을 추출
        var num = Number(intStrs[i].slice(s, s + l));
        
        // 그 값이 k보다 크면 answer 배열에 추가
        if (num > k) {
            answer.push(num);
        }
    }
    
    return answer;
}
