function solution(str1, str2) {
    var answer = '';
    for (i=0;i<str1.length;i++) {
        str1 = [...str1]
        str2 = [...str2]
        answer += str1[i]
        answer += str2[i]
    }
    return answer;
}