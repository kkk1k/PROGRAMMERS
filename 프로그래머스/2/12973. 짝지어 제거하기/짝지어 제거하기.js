function solution(s)
{
    let answer = 0
    
    let stack = []
    
    for (let i of s) {
        if(stack.length === 0) {
            stack.push(i)
        } else {
            if (stack[stack.length- 1] === i) {
                stack.pop()
            } else {
                stack.push(i)
            }
        }
    }
    if(stack.length ===  0){
        return 1
    }
    return answer;
}