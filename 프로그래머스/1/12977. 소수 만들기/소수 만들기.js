function solution(nums) {
    let count = 0;

    // 소수 판별 함수
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    // 세 개의 수 조합을 만들고, 합이 소수인지 확인
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if (isPrime(sum)) count++;
            }
        }
    }

    return count;
}
