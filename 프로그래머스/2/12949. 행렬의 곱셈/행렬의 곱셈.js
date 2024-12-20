function solution(arr1, arr2) {
    var answer = [];
    for (let i = 0; i < arr1.length; i++) { // arr1의 행 개수만큼 반복
        let row = [];
        for (let j = 0; j < arr2[0].length; j++) { // arr2의 열 개수만큼 반복
            let sum = 0;
            for (let k = 0; k < arr2.length; k++) { // arr1의 열 개수 = arr2의 행 개수
                sum += arr1[i][k] * arr2[k][j];
            }
            row.push(sum);
        }
        answer.push(row);
    }
    return answer;
}
