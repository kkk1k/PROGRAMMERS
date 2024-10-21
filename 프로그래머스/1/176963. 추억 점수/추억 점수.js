function solution(name, yearning, photo) {
    var answer = [];
    var obj = {}
    for (i=0; i<name.length; i++ ) {
        obj[name[i]] = yearning[i]
    }
    for (i=0; i<photo.length; i++) {
        let sum = 0;
        for(j=0; j<photo[i].length; j++) {
            if(obj[photo[i][j]] !== undefined) {
                sum += obj[photo[i][j]]
            }
        }
        answer.push(sum)
    }
    return answer;
}