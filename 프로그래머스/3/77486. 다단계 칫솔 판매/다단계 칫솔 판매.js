function solution(enroll, referral, seller, amount) {
    var answer = [];
    
    let obj = {}
    let moneyObj = {}
    for (let i =0; i< enroll.length; i++) {
        moneyObj[enroll[i]] = 0
        if(referral[i] === "-") continue;
        obj[enroll[i]] = referral[i]
    }
    
    function cal (person, money) {
        if(person === undefined) {
            return 
        }
        const commission = Math.floor(money / 10);
        const profit = money - commission;
        moneyObj[person] += profit;
        if(commission >= 1) {
            cal(obj[person],commission)
        }
        
    }
    
    
    for(let i = 0; i<seller.length; i++) {
        cal(seller[i],amount[i] *100)
    }
    for (let key in moneyObj) {
        answer.push(moneyObj[key])
    }
    return answer;
}