function solution(wallpaper) {
    var answer = [];
    let arr = []
    for(let i =0; i < wallpaper.length; i++) {
        for(let j=0; j<wallpaper[i].length; j++) {
            if(wallpaper[i][j] === "#") {
                arr.push([i,j])
                
            }
        }
    }
    
    let x = 51;
    let y = 51
    for(let i = 0;i<arr.length;i++){
        if (arr[i][0] < x) {
            x= arr[i][0]
        }
        if(arr[i][1] < y) {
            y=arr[i][1]
        }
    }
    answer.push(x)
    answer.push(y)
    
    
    for(let i = 0;i<arr.length;i++){
        if (arr[i][0] > x) {
            x= arr[i][0] 
        }
        if(arr[i][1] > y) {
            y=arr[i][1]
        }
    }
    
    answer.push(x +1 )
    answer.push(y +1)
    
    return answer;
}