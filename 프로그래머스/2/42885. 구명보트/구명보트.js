function solution(people, limit) {
    var answer = 0;
    people.sort((a, b) => a - b); // 몸무게 오름차순 정렬
    let left = 0;
    let right = people.length - 1;

    while (left <= right) {
        // 가장 가벼운 사람 + 가장 무거운 사람이 limit 이내라면 둘 다 태움
        if (people[left] + people[right] <= limit) {
            left += 1;
        }
        // 가장 무거운 사람은 항상 태움
        right -= 1;
        answer += 1; // 보트 추가
    }

    return answer;
}
