function solution(numbers, hand) {
    // 키패드 위치 설정 (객체)
    const keyPosition = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };
    
    // 시작 위치 설정
    let leftThumb = keyPosition['*'];
    let rightThumb = keyPosition['#'];
    let result = [];

    // 거리 계산 함수 (맨해튼 거리)
    function distance(pos1, pos2) {
        return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
    }
    
    // 각 숫자를 순서대로 처리
    for (let number of numbers) {
        if ([1, 4, 7].includes(number)) {  // 왼쪽 열
            result.push('L');
            leftThumb = keyPosition[number];
        } else if ([3, 6, 9].includes(number)) {  // 오른쪽 열
            result.push('R');
            rightThumb = keyPosition[number];
        } else {  // 가운데 열
            const leftDist = distance(leftThumb, keyPosition[number]);
            const rightDist = distance(rightThumb, keyPosition[number]);
            
            if (leftDist < rightDist) {
                result.push('L');
                leftThumb = keyPosition[number];
            } else if (rightDist < leftDist) {
                result.push('R');
                rightThumb = keyPosition[number];
            } else {  // 거리가 같을 경우
                if (hand === "left") {
                    result.push('L');
                    leftThumb = keyPosition[number];
                } else {
                    result.push('R');
                    rightThumb = keyPosition[number];
                }
            }
        }
    }
    
    return result.join('');
}
