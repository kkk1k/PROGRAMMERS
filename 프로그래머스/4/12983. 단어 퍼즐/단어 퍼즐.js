function solution(strs, t) {
    var answer = 0;

    const dp = Array(t.length  ).fill(Infinity)

    for(let i = 0 ; i<dp.length; i++) {
        let item = t.slice(0,i+1)
        for(let str of strs) {
            if(item.endsWith(str)){
                
                let diff = item.length - str.length 
            
                if(diff === 0) {
                    dp[i] = 1
                } else{
                    dp[i] = Math.min(dp[i], dp[diff-1]+1)   
                }         
            }
        } 
    }

    return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1];
}