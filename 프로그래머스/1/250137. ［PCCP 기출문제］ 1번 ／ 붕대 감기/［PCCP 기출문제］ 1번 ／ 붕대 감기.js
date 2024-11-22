function solution(bandage, health, attacks) {
    var answer = 0;
    let conSuc = 0;
    const maxHel = health
    const time = attacks[attacks.length-1][0]
    let obj = {}
    attacks.forEach(item => {
        obj[item[0]] = item[1]
    })
    for(let i = 0; i<=time; i++) {
        // 공격이 없을떄
        if(obj[i] === undefined) {
            
            conSuc += 1
            if(conSuc === bandage[0]) {
                health += bandage[2]
                conSuc = 0
            }
            health += bandage[1]
            if(health >= maxHel) {
                health = maxHel
            }
        } // 공격을 받았을 때
        else {
            conSuc = 0
            health -= obj[i]
            if(health <= 0) {
                health = -1
                break
            }
        }
    }
    return health;
}