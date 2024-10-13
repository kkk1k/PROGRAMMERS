function solution(phone_number) {
    var answer = [...phone_number].map((item,idx)=> idx < phone_number.length - 4 ? '*' : item ).join('');
    return answer;
}