function solution(orders, course) {
    var answer = [];
   
    function comb(arr,num) {
        
        const helper = (curr, remain) => {
            if(curr.length === num ){
                return [curr.join("")]
            }
            
            let result = []
            for(let i = 0; i<remain.length;i++) {
                let newCurrent = [...curr, remain[i]]
                let newRemain = remain.slice(i+1)
                result = result.concat(helper(newCurrent,newRemain))
            }
            return result
        }
        
        return helper([],arr)
    }
    
    for(let i of course) {
        let menu = []
        let obj = {}
        for(let order of orders) {
            let word = order.split("")
            menu.push(...comb(word,i)) 
        }
        
        for (let item of menu) {
            let key = item.split("").sort().join("")
            obj[key] = (obj[key] || 0) +1
        }
        
        const max = Math.max(...Object.values(obj))

        if(max>=2) {
            for(let key in obj) {
                if(obj[key] === max) {
                    answer.push(key)
                }
            }
        }
        
    }

    
    return answer.sort();
}