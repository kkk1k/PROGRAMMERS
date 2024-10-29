function solution(babbling) {
    let answer = 0;
    const regex = /^(aya(?!aya)||ye(?!ye)||woo(?!woo)||ma(?!ma))+$/
    
    for (let word of babbling) {
        if (regex.test(word)) {
            answer += 1
        }
    }
    
    return answer;
}
