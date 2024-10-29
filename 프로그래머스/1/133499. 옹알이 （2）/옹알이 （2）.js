function solution(babbling) {
    const baby = ["aya", "ye", "woo", "ma"];
    let answer = 0;

    // 각 babbling 단어를 확인
    for (let word of babbling) {
        let isValid = true;
        let prev = ''; // 직전 발음을 추적
        let i = 0;

        while (i < word.length) {
            let found = false;

            // baby 배열의 각 발음으로 시작하는지 확인
            for (let sound of baby) {
                if (word.startsWith(sound, i)) {
                    // 직전 발음과 동일하면 유효하지 않음
                    if (sound === prev) {
                        isValid = false;
                        break;
                    }
                    prev = sound;
                    i += sound.length;
                    found = true;
                    break;
                }
            }

            // 가능한 발음을 찾지 못했다면 유효하지 않은 단어
            if (!found) {
                isValid = false;
                break;
            }
        }

        // 유효한 발음이라면 answer 증가
        if (isValid) answer++;
    }

    return answer;
}
