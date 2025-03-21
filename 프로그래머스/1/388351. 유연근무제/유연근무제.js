function solution(schedules, timelogs, startday) {
    var answer = 0;
    let num = schedules.length

    for(let i =0; i<num; i++) {
        let baseHour = Math.floor(schedules[i] / 100);
        let baseMin = schedules[i] % 100;

        // 10분을 더함
        baseMin += 10;

        // 분이 60 이상이면 올림 처리
        if (baseMin >= 60) {
            baseHour += Math.floor(baseMin / 60);
            baseMin = baseMin % 60;
        }

        let item = baseHour * 100 + baseMin;

        let check = false
         for (let j = 0; j < 7; j++) {
            // startday가 월요일=1, ..., 일요일=7일 경우:
            // 토요일(6)과 일요일(7 또는 0으로 나올 수 있음)을 skip
            let day = (startday + j) % 7;
            // 여기서 day가 0이면 실제 7일(일요일)로 볼 수도 있으므로 조건을 아래와 같이 수정합니다.
            if (day === 0) day = 7;
            if (day === 6 || day === 7) continue;  // 토, 일은 건너뜁니다.

            if (timelogs[i][j] > item) {
                check = true;
                break;
            }
        }
        if(!check) {
            answer+=1
        }
        
    }
    return answer;
}