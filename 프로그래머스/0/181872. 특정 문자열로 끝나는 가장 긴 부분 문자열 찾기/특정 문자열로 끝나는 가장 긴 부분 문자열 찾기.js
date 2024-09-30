function solution(myString, pat) {
    var answer = myString.slice(0,myString.lastIndexOf(pat)+pat.length);
    
    return answer;
}