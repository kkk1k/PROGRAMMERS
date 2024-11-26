function solution(s) {
    var answer =[];
    let arr = [...s]
    let str = ""
    let cnt = 0
    let delZero = 0
    while(arr.length > 1) {
        cnt += 1
        for (let i of arr) {
            if(i === "0") {
                delZero += 1
            }
        }
        let newArr = arr.filter(a=> a !== "0")
        let len = newArr.length
        let str1 = []
        while(len > 0) {
            str1.push(String(len % 2))
            len = Math.floor(len / 2)
        }
        str = str1.reverse().join("")
        arr = [...str1]
     }

    answer.push(cnt)
    answer.push(delZero)
    return answer;
}