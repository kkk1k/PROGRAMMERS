function solution(survey, choices) {
    var answer = '';
    let score = {
        "R": 0, "T" : 0, "C" : 0, "F": 0, 
        "J": 0, "M" : 0, "A" : 0, "N": 0,
    }
    
    survey.forEach((item,idx) => {
        let choice = choices[idx]
        switch (item) {
            case "RT":
                if([1,2,3].includes(choice)){
                    score["R"] += 4 - choice
                    break
                }
                if([5,6,7].includes(choice)) {
                    score["T"] += choice - 4
                    break
                }
            case "TR":
                if([1,2,3].includes(choice)){
                    score["T"] += 4 - choice
                    break
                }
                if([5,6,7].includes(choice)) {
                    score["R"] += choice - 4
                    break
                }
            case "FC":
                if([1,2,3].includes(choice)){
                    score["F"] += 4 - choice
                    break
                }
                if([5,6,7].includes(choice)) {
                    score["C"] += choice - 4
                    break
                }
            case "CF":
                if([1,2,3].includes(choice)){
                    score["C"] += 4 - choice
                    break
                }
                if([5,6,7].includes(choice)) {
                    score["F"] += choice - 4
                    break
                }
            case "MJ":
                if([1,2,3].includes(choice)){
                    score["M"] += 4 - choice
                    break
                }
                if([5,6,7].includes(choice)) {
                    score["J"] += choice - 4
                    break
                }
            case "JM":
                if([1,2,3].includes(choice)){
                    score["J"] += 4 - choice
                    break
                }
                if([5,6,7].includes(choice)) {
                    score["M"] += choice - 4
                    break
                }
            case "AN":
                if([1,2,3].includes(choice)){
                    score["A"] += 4 - choice
                    break
                }
                if([5,6,7].includes(choice)) {
                    score["N"] += choice - 4
                    break
                }
            case "NA":
                if([1,2,3].includes(choice)){
                    score["N"] += 4 - choice
                    break
                }
                if([5,6,7].includes(choice)) {
                    score["A"] += choice - 4
                    break
                }
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