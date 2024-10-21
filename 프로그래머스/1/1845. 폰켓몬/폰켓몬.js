function solution(nums) {
    var answer = 0;
    var obj = [...new Set(nums)];
    var numObj = obj.length
    var numNums = nums.length / 2
    if (numObj >= numNums) {
        return numNums
    } else {
        return numObj
    }
   
}