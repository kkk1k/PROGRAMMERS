function solution(myString) {
    var answer = [...myString].map(a=> a < 'l' ? 'l' : a).join('');
    return answer;
}