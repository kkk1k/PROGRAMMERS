function solution(s,skip, index) {
   
    var answer = "";
    var sArr = [...s].map(item => item.charCodeAt())
    var skipArr = [...skip].map(item => item.charCodeAt())
    
    for (let num of sArr) {
        let i = 1
        console.log("tasd",num)
        while (i <= index) {
            num += 1
            if (num >=123) {
                num = 97
            }
            if(skipArr.includes(num)) {
                continue
            } else {
                i++
            }
            
        }
        answer += String.fromCharCode(num)
    }
    return answer;
}