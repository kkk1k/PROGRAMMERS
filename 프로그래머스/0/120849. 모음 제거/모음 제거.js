function solution(my_string) {
    var answer = my_string.replace(/a/g,"");
    var answer = answer.replace(/e/g,"");
    var answer = answer.replace(/i/g,"");
    var answer = answer.replace(/o/g,"");
    var answer = answer.replace(/u/g,"");
    return answer;
}