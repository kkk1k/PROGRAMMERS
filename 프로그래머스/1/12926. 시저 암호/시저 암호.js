function solution(s, n) {
    
    var answer = [...s].map((item)=> {
        if(item === ' '){
            return ' '
        }
        if(item.charCodeAt() >= 65 && item.charCodeAt() <= 90 ) {
            if(item.charCodeAt() + n > 90) {
                return n- (90 - item.charCodeAt()) + 64
            }
            return item.charCodeAt() + n
        } 
        if(item.charCodeAt() >= 97 && item.charCodeAt() <= 122) {
            if(item.charCodeAt() + n > 122) {
                return n- (122 - item.charCodeAt()) + 96
            }
            return item.charCodeAt() + n
        }
       
    });
    
    return answer.map(item => item === ' ' ? ' ' : String.fromCharCode(item) ).join('') ;
}