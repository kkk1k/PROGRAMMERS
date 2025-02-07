const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const n = Number(input);

const MOD = 15746;

// ✅ 배열을 동적으로 할당 (메모리 절약을 위해 크기를 n+1로 설정)
const dp = Array(n + 1).fill(0);

// ✅ 초기값 설정
dp[1] = 1;
if (n > 1) dp[2] = 2;

// ✅ DP 점화식 적용 (O(N))
for (let i = 3; i <= n; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
}

// ✅ 정답 출력
console.log(dp[n]);
