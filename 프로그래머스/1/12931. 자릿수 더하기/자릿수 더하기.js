function solution(n)
{
    var answer = String(n).split('').reduce((a,b)=> Number(a)+Number(b),0);

    

    return answer;
}