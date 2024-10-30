function solution(keymap, targets) {

    var answer = [];
    for(let target of targets) {
        let fullPoint = 0
        for(let i = 0; i<target.length; i++){
            let point = 101
            for (let key of keymap) {
                let idx = key.indexOf(target[i])
                if(point > idx + 1 && idx >= 0) {
                    point = idx + 1
                }
            }
            if (point === 101 ) {
                fullPoint = -1
                break
            }
            fullPoint += point
        }
        answer.push(fullPoint)
    }
    return answer;
}