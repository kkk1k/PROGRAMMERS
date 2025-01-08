function solution(str1, str2) {
    const toMultiSet = (str) => {
        const multiset = [];
        const lowerStr = str.toLowerCase();
        for (let i = 0; i < lowerStr.length - 1; i++) {
            const pair = lowerStr.slice(i, i + 2);
            if (/^[a-z]{2}$/.test(pair)) { // 두 글자가 모두 알파벳인지 확인
                multiset.push(pair);
            }
        }
        return multiset;
    };

    const str1Arr = toMultiSet(str1);
    const str2Arr = toMultiSet(str2);

    // 각 다중집합의 원소 빈도수 계산
    const countOccurrences = (arr) => {
        return arr.reduce((acc, item) => {
            acc[item] = (acc[item] || 0) + 1;
            return acc;
        }, {});
    };

    const str1Count = countOccurrences(str1Arr);
    const str2Count = countOccurrences(str2Arr);

    // 교집합과 합집합 계산
    let intersection = 0;
    let union = 0;

    const allKeys = new Set([...Object.keys(str1Count), ...Object.keys(str2Count)]);
    allKeys.forEach(key => {
        const count1 = str1Count[key] || 0;
        const count2 = str2Count[key] || 0;
        intersection += Math.min(count1, count2);
        union += Math.max(count1, count2);
    });

    // 합집합이 0인 경우
    if (union === 0) {
        return 65536;
    }

    const jaccard = intersection / union;
    return Math.floor(jaccard * 65536);
}

// 테스트 케이스
console.log(solution("ABABAB", "BABABA")); // 출력: 43690
