function solution(s){
    var answer = true;
    let stack = []
    let arr = s.split("")
    for (let item of arr) {
        if(item === "(") {
            stack.push(item)
        } else {
            if(stack.length === 0) {
                return false
                break
            } else {
                stack.pop()
            }
        }
    }
    
    if(stack.length === 0 ) {
        return true
    } else {
        return false
    }
    
}