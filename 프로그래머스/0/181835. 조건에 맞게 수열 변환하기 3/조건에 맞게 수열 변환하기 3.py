def solution(arr, k):
    answer = [i*k for i in  arr]
    if k % 2 == 0:
        answer = [i+k for i in arr]
    
    return answer