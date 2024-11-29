function solution(n)
{
    let answer = 0
    let i = n
    while (i > 0 ) {
        if(i % 2 === 0) {
            i = i / 2
            continue
        } else {
            i -= 1
            answer += 1
        }
    }
    
    return answer;
}