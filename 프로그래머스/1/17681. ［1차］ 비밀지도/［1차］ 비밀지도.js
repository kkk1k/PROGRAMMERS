function solution(n, arr1, arr2) {
    var answer = [];
    for (i= 0 ; i<arr1.length; i++) {
        let arrSum = ""
        let ar1 = arr1[i]
        let ar2 = arr2[i]
        for(j = 1 ; j <= n ; j++) {

            if(ar1 === 0 && ar2 === 0) {
                arrSum += " "
            } else if(ar1 % 2 === 0 && ar2 % 2 === 0 ) {
                arrSum += " "
            } else {
                arrSum += "#"
            }
            ar1 = Math.floor(ar1/2)
            ar2 = Math.floor(ar2/2)
        }
        answer.push([...arrSum].reverse().join(''))
    }
    
    return answer;
}