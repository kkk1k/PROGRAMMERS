// 초로 변환하는 함수
function toNum (list) {
    let [a,b] = list.split(":").map(Number)
    return a*60 + b
}
// 문자로 변환하는 함수
function toStr (a) {
    if(a < 10) {
        return "0" + String(a)
    } else {
        return String(a)
    }
}

function solution(video_len, pos, op_start, op_end, commands) {
    var answer = '';
    let videoNum = toNum(video_len)
    let posNum = toNum(pos)
    let startNum = toNum(op_start)
    let endNum = toNum(op_end)

    // 오프닝 체크하는 함수
    function checkOp (num) {
        if(num >= startNum && num <= endNum ) {
            return true
        } else {
            return false
        }
    }
    
    commands.forEach(item => {
        if(checkOp(posNum)) {
            posNum = endNum
        }
        if(item === "next"){
            posNum += 10
        } else {
            posNum -= 10
        }
        if(posNum >= videoNum) {
            posNum = videoNum
        } 
        if(posNum < 0) {
            posNum = 0
        }
    })
    if(checkOp(posNum)) {
        posNum = endNum
    }
    
    let an1 = toStr(Math.floor(posNum / 60))
    let an2 = toStr(posNum % 60)
    
    return an1 + ":" + an2;
}