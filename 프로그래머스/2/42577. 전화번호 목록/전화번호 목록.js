function solution(phone_book) {
    var answer = true;
    phone_book.sort()
    let small = phone_book[0]
    for(let i = 1; i<phone_book.length; i++) {
        let len = small.length
        if(small === phone_book[i].slice(0,len)) {
            answer = false 
            break
        }
        small = phone_book[i]
        
    }
    return answer;
}