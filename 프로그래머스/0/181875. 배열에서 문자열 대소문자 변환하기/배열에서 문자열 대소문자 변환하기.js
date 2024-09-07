function solution(strArr) {
    var answer = strArr.map((item,idx) => idx % 2 === 0 ? item.toLowerCase() : item.toUpperCase() );
    return answer;
}