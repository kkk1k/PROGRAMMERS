def solution(n):
    answer = 2
    num =  n ** (1/2)
    if num.is_integer():
        answer = 1
    return answer