function solution(myString, pat) {
    var answer = 0;
    var newString = myString.split('')
    var abc = newString.map(item=> item=="A" ? "B" :"A")
    abc = abc.join('')
    if (abc.includes(pat)){
        return 1
    }
    return answer;
}