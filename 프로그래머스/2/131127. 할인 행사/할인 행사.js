function solution(want, number, discount) {
    var answer = 0;
    let obj = {}
    want.forEach((item,idx) => {
        obj[item] = number[idx]
    })
    for(let i = 0; i<=discount.length - 10; i++ ) {
        let check = {}
        for(let j = i; j<10+i; j++) {
            let goods = discount[j]
            if(check[goods] === undefined) {
                check[goods] = 1
            } else {
                check[goods] += 1
            }
        }
        const isMatch = Object.keys(obj).every(key => obj[key] === check[key]);
        if (isMatch) {
            answer++; // 가능한 날짜 개수 증가
        }
    }
    return answer
}