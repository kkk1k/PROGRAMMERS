function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    for (i = 0; i<goal.length; i++) {
        if(cards1[0] !== goal[i] && cards2[0] !== goal[i]) {
            answer = "No"
            break
        }
        if(cards1[0] === goal[i]) {
            cards1 = cards1.slice(1,cards1.length )
        }
        if(cards2[0] === goal[i]) {
            cards2 = cards2.slice(1,cards2.length )
        }
        // console.log(cards1)
        // console.log(cards2)
    }
    return answer;
}