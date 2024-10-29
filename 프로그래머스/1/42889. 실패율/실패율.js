function solution(N, stages) {
    var answer = [];
    var fullArr = []
    var failArr = []
    for (i = 1; i<=N; i++) {
        fullArr.push(0);
        failArr.push(0)
    }
    
    for (let stage of stages) {
        for (let i = 0 ; i<stage; i++) {
            if(i >= N) {
                continue
            }
            fullArr[i] += 1
            if(i === stage - 1) {
                failArr[i] += 1
            }
        }
    }  
    
    var failArr = failArr.map((item,idx) => item / fullArr[idx] )
    var obj = {}
    for (let i= 1; i<=failArr.length; i++) {
        obj[i] = failArr[i-1]
    }
    
    const sortedEntries = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    
    return sortedEntries.map(item => Number(item[0])) ;
}