function solution(n) {
    const isPrime = Array(n + 1).fill(true);  // 모든 수를 소수로 가정
    isPrime[0] = isPrime[1] = false;          // 0과 1은 소수가 아님

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;           // i의 배수를 소수가 아니라고 표시
            }
        }
    }

    return isPrime.filter(v => v).length;     // true로 남은 값들만 카운트
}
