def solution(a, b):
    c = int(str(a) + str(b))
    d = 2*a*b
    answer = c
    if c < d :
        answer = d
    return answer