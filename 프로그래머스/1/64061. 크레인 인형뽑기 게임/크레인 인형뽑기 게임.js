function solution(board, moves) {
    var answer = 0;
    var stack = board.map((item)=> [])
    board.forEach(item=> {
       item.forEach((num, idx) => {
            if (num !== 0) {  
                stack[idx].push(num);
            }
        });
    })
    
    var bunch = []
    
    moves.forEach(item => {
        let column = stack[item-1]
        
        if(column.length > 0) {
            if (bunch[bunch.length-1] === column[0]) {
                answer += 2
                bunch.pop()
                column.shift()
            } else {
                bunch.push(column.shift())
            }
            
            
        }
    })
    return answer;
}