function solution(my_string, m, c) {
    var answer = '';
    var list = []
    for (i=0; i<my_string.length ; i+=m) {
        list.push([...my_string.slice(i,i+m)])
    }
    for (i=0; i<list.length; i++) {
        answer += list[i][c-1]
    }
    return answer;
}