def solution(n, control):
    ans = {"w":1, "s":-1, "d":10, "a":-10}
    answer = n
    for i in control:
        answer += ans[i]
    return answer