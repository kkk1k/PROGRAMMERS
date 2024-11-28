function solution(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let prev = 0; // F(0)
    let curr = 1; // F(1)

    for (let i = 2; i <= n; i++) {
        const next = prev + curr; // F(n) = F(n-1) + F(n-2)
        prev = curr % 1234567; // 이전 값 업데이트
        curr = next %1234567; // 현재 값 업데이트
    }
    
    return curr%1234567;
}
