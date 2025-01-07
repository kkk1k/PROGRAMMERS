function solution(phone_book) {
    var answer = true;
    phone_book.sort()
    const len = phone_book.length
    for(let idx = 0; idx< len-1; idx++) {
        let item = phone_book[idx]
        if(phone_book[idx+1].slice(0,item.length) === item) {
            answer = false
            break
        }
    }
    return answer ;
}