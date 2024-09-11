function solution(n) {
    var answer = [];

    for (var i = 0; i < n; i++) {
        answer[i] = []; // Initialize the inner array

        for (var j = 0; j < n; j++) {
            if (i === j) {
                answer[i][j] = 1; // Assign 1 to the diagonal
            } else {
                answer[i][j] = 0; // Assign 0 elsewhere
            }
        }
    }

    return answer;
}
