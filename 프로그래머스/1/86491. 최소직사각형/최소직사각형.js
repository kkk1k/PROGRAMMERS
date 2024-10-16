function solution(sizes) {
    var width = 0;
    var column = 0;
    for (i = 0; i<sizes.length; i++) {
        sizes[i].sort((a,b) => {
            return a-b
        })
        if(sizes[i][0] > width) {
            width = sizes[i][0]
        }
        if(sizes[i][1] > column) {
            column = sizes[i][1]
        }
        
    }
    return width * column;
}