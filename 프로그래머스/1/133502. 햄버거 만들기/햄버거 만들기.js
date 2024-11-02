function solution(ingredient) {
    var answer = 0;
    var stack = []
    for(let i = 0; i<ingredient.length; i++) {
        stack.push(ingredient[i])
         if (stack.length >= 4 && stack.slice(-4).join('') === "1231") {
            stack.splice(-4); // 햄버거 패턴 제거
            answer++; // 햄버거 개수 증가
        }
        
    }
    return answer;
}