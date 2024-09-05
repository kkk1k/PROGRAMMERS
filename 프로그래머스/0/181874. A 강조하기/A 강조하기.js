function solution(myString) {
    var answer = [...myString].map(item => item == 'a' ? 'A' : item !== "A"&&item === item.toUpperCase() ? item.toLowerCase(): item).join('');
    return answer;
}