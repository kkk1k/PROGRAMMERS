function solution(players, callings) {
    
    var obj = {}
    
    players.forEach((item,idx) => {
        obj[item] = idx
    })
    
    callings.forEach(item => {
        const playerIdx = obj[item]
        const prevPlayer = players[playerIdx - 1];
        [players[playerIdx - 1], players[playerIdx]] = [players[playerIdx], players[playerIdx - 1]];
        obj[item]--;
        obj[prevPlayer]++;

    })
    
    return players;
}