function solution(players, callings) {
    // 선수들의 순위를 해시 맵으로 저장
    const rankMap = new Map();
    players.forEach((player, index) => {
        rankMap.set(player, index);
    });

    // callings 배열의 이름에 따라 순위 갱신
    callings.forEach((calledPlayer) => {
        const currentRank = rankMap.get(calledPlayer);

        if (currentRank > 0) { // 1등이 아닌 경우만 처리
            const prevPlayer = players[currentRank - 1];

            // 선수 배열에서 순위 교체
            [players[currentRank - 1], players[currentRank]] = [players[currentRank], players[currentRank - 1]];

            // 해시 맵에서 순위 갱신
            rankMap.set(calledPlayer, currentRank - 1);
            rankMap.set(prevPlayer, currentRank);
        }
    });

    return players;
}