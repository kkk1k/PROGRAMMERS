function solution(triangle) {
    var answer = 0;
    const dp = Array.from({length : triangle.length}, ()=> [])
    for (let i = 0; i< triangle.length; i++) {
        for(let j=0; j<triangle[i].length; j++) {
            dp[i].push(0)
        }
    }
    dp[0][0] = triangle[0][0]
    
    for(let i =1; i<triangle.length; i++) {
        for(let j = 0; j<triangle[i].length ;j++) {
            if(!dp[i-1][j]) {
                dp[i][j] = dp[i-1][j-1] + triangle[i][j]
            } else if ( !dp[i-1][j-1]) {
                dp[i][j] = dp[i-1][j] + triangle[i][j]
            } else {
                dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j-1]) + triangle[i][j]
            }
        }
    }
    
    return Math.max(...dp[triangle.length-1]);
}