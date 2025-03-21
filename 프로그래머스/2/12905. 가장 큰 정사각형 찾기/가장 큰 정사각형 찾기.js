function solution(board)
{
    const n = board.length
    const m = board[0].length
    const dp = Array.from({length : n}, ()=> Array(m).fill(0))

    for (let i = 0; i<n; i++ ) {
        dp[i][0] = board[i][0]
    }
        
    for (let i = 0; i<m; i++) {
        dp[0][i] = board[0][i]
    } 
    for(let i = 1; i<n;i++) {
        for (let j=1;j<m;j++) {
            if(board[i][j] === 1){
                dp[i][j] = Math.min(dp[i-1][j-1],dp[i][j-1],dp[i-1][j]) + 1
       
            }
        }
    }
    
    return Math.max(...dp.map(item => Math.max(...item))) **2;
}