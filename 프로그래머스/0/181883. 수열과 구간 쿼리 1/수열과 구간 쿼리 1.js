function solution(arr, queries) {
    for (let i = 0; i < queries.length; i++) {
        const [s, e] = queries[i]; // 각 query에서 시작과 끝 인덱스를 가져옴
        for (let j = s; j <= e; j++) {
            arr[j] += 1; // s ≤ j ≤ e 범위의 arr[j]에 1을 더함
        }
    }
    return arr;
}
