function solution(s) {
    let answer = 0;

    // 문자열을 회전하며 검사
    for (let i = 0; i < s.length; i++) {
        let stack = [];
        let rotated = s.slice(i) + s.slice(0, i); // 문자열 회전

        let isValid = true;
        for (let char of rotated) {
            if (char === '(' || char === '{' || char === '[') {
                stack.push(char); // 여는 괄호를 스택에 추가
            } else {
                // 닫는 괄호일 때, 스택에서 꺼내서 매칭 검사
                let last = stack.pop();
                if (
                    (char === ')' && last !== '(') ||
                    (char === '}' && last !== '{') ||
                    (char === ']' && last !== '[')
                ) {
                    isValid = false;
                    break;
                }
            }
        }

        // 스택이 비어 있고 올바른 문자열일 때만 카운트
        if (isValid && stack.length === 0) {
            answer++;
        }
    }

    return answer;
}
