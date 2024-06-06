def solution(array):
    num = 0
    idx = 0
    for i in range(len(array)):
        if num < array[i]:
            num = array[i]
            idx = i
    answer = []
    answer.append(num)
    answer.append(idx)
    
    return answer