function solution(numbers) {
    var answer = 0;
    numbers.sort(function(a,b) {
        return (a-b)
    } )
    var a = numbers[0] * numbers[1]
    var b = numbers.pop() * numbers.pop()
    if (a > b) {
        answer = a
    } else {
        answer = b
    }
    
    return answer;
}