function solution(a, b) {
    var answer = '';
    var month = [31,29,31,30,31,30,31,31,30,31,30,31]
    var day = b
    for (i = 0; i<a-1; i++) {
        day += month[i]
    }
    switch(day % 7) {
        case 0:
            return "THU";
        case 1:
            return "FRI";
        case 2: 
            return "SAT";
        case 3: 
            return "SUN";
        case 4:
            return "MON";
        case 5:
            return "TUE";
        case 6:
            return "WED"
    }
   
}