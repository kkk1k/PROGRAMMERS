function solution(rny_string) {
    var answer = [...rny_string].map(a=> a == 'm' ? 'rn' : a).join('');
    return answer;
}