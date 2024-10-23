function solution(answers) {
    var answer = [];
    let sum1 = 0
    let sum2 = 0
    let sum3 = 0
    
    for(i=0;i<answers.length;i++){
        // 1번
        if(answers[i] === (i % 5) + 1) {
            sum1 += 1
        }
        // 2번
        if(i % 2 === 0) {
            if(answers[i]===2) {
                sum2 += 1
            }
        } else {
           switch (i % 8) {
                case 1:
                    if (answers[i] === 1) {
                        sum2 += 1;
                        console.log("며1");
                    }
                    break; // 추가된 부분
                case 3:
                    if (answers[i] === 3) {
                        sum2 += 1;
                        console.log("며3");
                    }
                    break; // 추가된 부분
                case 5:
                    if (answers[i] === 4) {
                        sum2 += 1;
                        console.log("며4", answers[i]);
                    }
                    break; // 추가된 부분
                case 7:
                    if (answers[i] === 5) {
                        sum2 += 1;
                        console.log("며5");
                    }
                    break; // 추가된 부분
            }
    
        }
        
        // 3번 
        if(i% 10 === 0 || i% 10 === 1) {
            if(answers[i] === 3) {
                sum3 += 1
            }
        } else if(i% 10 === 2 || i% 10 === 3){
            if(answers[i] === 1) {
                sum3 += 1
            }
        } else if(i% 10 === 4 || i% 10 === 5) {
            if(answers[i] === 2) {
                sum3 += 1
            }
        } else if(i% 10 === 6 || i% 10 === 7) {
            if(answers[i] === 4) {
                sum3 += 1
            }
        } else {
            if(answers[i] === 5) {
                sum3 += 1
            }
        }
        
    }
    
    if (sum1 >= sum2 && sum1 >= sum3 ){
        answer.push(1)
    }
    if(sum2 >= sum1 && sum2 >= sum3) {
        answer.push(2)
    }
    if(sum3 >= sum2 && sum3 >= sum1) {
        answer.push(3)
    }

    
    return answer;
}