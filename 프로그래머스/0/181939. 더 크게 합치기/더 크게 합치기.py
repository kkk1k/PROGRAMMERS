def solution(a, b):
    answer = int(str(a) + str(b))
    c = int(str(b)+str(a))
    if answer < c:
        answer = c
    return answer