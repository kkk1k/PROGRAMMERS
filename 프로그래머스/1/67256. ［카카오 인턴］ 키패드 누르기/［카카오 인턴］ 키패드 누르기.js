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
    let result = '';

    // 거리 계산 함수 (맨해튼 거리)
    function distance(pos1, pos2) {
        return Math.abs(pos1[0] - pos2[0]) + Math.abs(pos1[1] - pos2[1]);
    }
    
    numbers.forEach(item => {
        if([1,4,7].includes(item)) {
            result += "L"
            leftThumb = keyPosition[item]
        } else if ([3,6,9].includes(item)) {
            result += "R"
            rightThumb = keyPosition[item]
        } else {
            const leftDist = distance(leftThumb, keyPosition[item]);
            const rightDist = distance(rightThumb, keyPosition[item]);
            
            if(leftDist > rightDist) {
                result += "R"
                rightThumb = keyPosition[item]
            } else if (leftDist < rightDist) {
                result += "L"
                leftThumb = keyPosition[item]
            } else {
                if(hand === "right") {
                    result += "R"
                    rightThumb = keyPosition[item]
                }
                if(hand === "left") {
                    result += "L"
                leftThumb = keyPosition[item]
                }
            }
            
        }
    })
    
    return result;
}
