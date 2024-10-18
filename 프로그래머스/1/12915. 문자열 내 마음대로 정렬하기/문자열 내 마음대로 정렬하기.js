function solution(strings, n) {
    return strings.sort((a, b) => {
        if (a[n] === b[n]) {
            // 동점일 때는 전체 문자열을 사전순으로 비교
            return a > b ? 1 : -1;
        }
        // n번째 문자를 사전순으로 비교
        return a[n] > b[n] ? 1 : -1;
    });
   
}
