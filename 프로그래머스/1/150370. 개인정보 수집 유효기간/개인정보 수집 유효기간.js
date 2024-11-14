function solution(today, terms, privacies) {
    var answer = [];
    let todayArr = today.split(".").map(Number)
    let todayDate = todayArr[0] * 336 + todayArr[1] * 28 + todayArr[2]
    
    let obj = {}
    for (let term of terms ) {
        let [a,b] = term.split(" ")
        obj[a] = Number(b)
    }
    privacies.forEach((item,idx) => {
        let [dates, term] = item.split(" ")
        let date = dates.split(".").map(Number)
        let totalDate = date[0] * 336 + date[1] * 28 + date[2]
        let diffDate = todayDate - totalDate
        if(obj[term] * 28 <= diffDate ) {
            console.log(term)
            answer.push(idx+1)
        }
        
    })
    
    return answer.sort((a,b)=> a-b);
}