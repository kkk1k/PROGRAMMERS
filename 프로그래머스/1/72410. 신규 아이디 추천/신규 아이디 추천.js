function solution(new_id) {
    var answer = '';
    let id = new_id.toLowerCase()
    let regex = /[^a-z0-9\.\_\-]/g
    id = id.replace(regex,"")
    let rgx = /\.{2,}/g
    id= id.replace(rgx,".")
    if(id[0] === ".") {
        id = id.slice(1)
    } 
    if (id[id.length -1] === ".") {
        id = id.slice(0,id.length - 1)
    }
    if(id.length === 0) {
        id = "a"
    }
    
    if (id.length >= 16) {
        id = id.slice(0,15)
    }
    
    if (id[id.length -1] === ".") {
            id = id.slice(0,id.length -1)
        }
    
    if(id.length <= 2) {
        while(id.length<3){
            id += id[id.length -1]
        }
    }
    
    return id;
}