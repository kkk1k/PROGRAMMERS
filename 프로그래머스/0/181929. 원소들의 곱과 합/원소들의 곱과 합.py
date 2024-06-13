def solution(num_list):
    hap= sum(num_list)
    hop = 1
    for i in num_list:
        hop *= i
    answer = 0
    if hap * hap > hop:
        answer = 1
    
    return answer