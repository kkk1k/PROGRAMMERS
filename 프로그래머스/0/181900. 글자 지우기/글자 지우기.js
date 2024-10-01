function solution(my_string, indices) {
    // indices 배열을 오름차순으로 정렬
    indices.sort((a, b) => a - b);

    // 결과를 저장할 문자열을 빈 문자열로 초기화
    let result = "";

    // my_string의 각 문자를 순회하면서, indices에 없는 인덱스만 result에 추가
    for (let i = 0; i < my_string.length; i++) {
        if (!indices.includes(i)) {
            result += my_string[i];
        }
    }

    return result;
}
