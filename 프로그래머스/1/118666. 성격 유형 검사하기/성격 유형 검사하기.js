function solution(survey, choices) {
    var answer = '';
    let score = {
        "R": 0, "T" : 0, "C" : 0, "F": 0, 
        "J": 0, "M" : 0, "A" : 0, "N": 0,
    }
    
    survey.forEach((item,idx) => {
        let choice = choices[idx]
        let abs = Math.abs(4-choices[idx])
        if(choice > 4) {
            score[item[1]] += abs
        }
        if(choice < 4) {
            score[item[0]] += abs
        }
    })
    let final = Object.keys(score)
    for(let i = 0; i<final.length; i += 2) {
        if(score[final[i]] > score[final[i+1]] || score[final[i]] === score[final[i+1]]) {
            answer += final[i]
        } else (
            answer += final[i+1]
        )
    }
    
    return answer;
}