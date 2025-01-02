function solution(citations) {
    var answer = 0;
    let sortedCitations = citations.sort((a,b) => a-b)
    for(let i = 0; i<sortedCitations.length ; i++ ){
        let index = sortedCitations[i] < sortedCitations.slice(i).length ? sortedCitations[i] : sortedCitations.slice(i).length
        
        if( index > answer) {
            answer = index
        }
    }
    return answer;
}