function solution(n) {
    var answer = String(n).split('').sort(
        function(a,b) {
            return b-a
                
        }
    ).join('');
    return Number(answer);
}