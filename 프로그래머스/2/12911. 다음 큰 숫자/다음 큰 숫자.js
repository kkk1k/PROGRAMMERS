function solution(n) {

    var answer = 0;
    let arr = []
    let i = n;
    // 2진수 찾기
    while(i !== 1){
        if(i % 2 === 1) {
            arr.push(1)
        }
        i = Math.floor(i / 2)
        if(i === 1) {
            arr.push(1)
        }
    }
    let k = n+1
    while(true ) {
        let arr2 = []
        // 2진수 만들기
        let j = k
        while(j !== 1) {
            if(j % 2 === 1) {
                arr2.push(1)
            }
                j = Math.floor(j / 2)
            if(j === 1) {
                arr2.push(1)
            }
        }
        if(arr2.length === arr.length){
            return k
            break
        }
        k++
    }
    return arr;
}