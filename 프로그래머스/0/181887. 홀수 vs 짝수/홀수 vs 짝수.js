function solution(num_list) {
    var a = 0;
    var b = 0;
    for(i=0; i<num_list.length;i+=2){
        a +=num_list[i]
    }
     for(i=1; i<num_list.length;i+=2){
        b +=num_list[i]
    }
    if (a>b){
        return a
    } else {
        return b
    }

}