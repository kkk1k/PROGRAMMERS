function solution(myString) {
    var answer = myString.split('x').sort().filter((item)=> item !== '')
    return answer;
}