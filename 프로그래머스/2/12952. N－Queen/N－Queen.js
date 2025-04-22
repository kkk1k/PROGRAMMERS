function solution(n) {
    var answer = 0;
    
    function possible(board,row,col) {
        for(let i = 1; i<row; i++) {
            if(board[i] === col) return false
            if (Math.abs(board[i] - col) === row - i) return false
        }
        return true
    }

    function dfs(board, row) {
        if(row === n) return answer++
        
        for(let col = 1; col<= n; col++) {
            if(possible(board, row+1,col)) {
                board[row+1] = col
                dfs(board, row+1)
            }
            
        }
    }
    
    for (let i = 1; i <= n; i++) {
      const board = Array(n + 1).fill(0);
      board[1] = i;
      dfs(board, 1);
    }
    
    return answer;
}