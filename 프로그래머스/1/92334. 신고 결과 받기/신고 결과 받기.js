function solution (id_list, report, k) {
    const obj_id = {}
    const obj_num = {}
    let answer = []
    let newReport =  [...new Set(report)]
    id_list.forEach(item => {
        obj_id[item] = new Set()
    })
    
    newReport.forEach(item => {
        let [ing, ed] = item.split(" ");
        obj_id[ing].add(ed); // Set에 추가
        obj_num[ed] = (obj_num[ed] || 0) + 1;  
    });
    
    let arr = []
    for (let key in obj_num) {
        if( obj_num[key] >= k) {
            arr.push(key)
        }
    }
    
    for(let key in obj_id) {
        let num = 0
        for(let target of obj_id[key]) {
            if(arr.includes(target)) {
                num+=1
            }
        }
        answer.push(num)
    }
    
    return answer
    
}

