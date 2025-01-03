function solution(progresses, speeds) {
    var answer = [];
    let save = progresses.map((progress, index) => 
        Math.ceil((100 - progress) / speeds[index])
    );
    let maxDay = save[0]
    let count = 0
    for (let i of save) {
        if(i <= maxDay) {
            count++
        } else {
            answer.push(count)
            count = 1
            maxDay = i
            
        }
    }
    answer.push(count)
    
    return answer;
}