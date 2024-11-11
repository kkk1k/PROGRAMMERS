function solution(wallpaper) {
    let minRow = Infinity, minCol = Infinity;
    let maxRow = -Infinity, maxCol = -Infinity;
    
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[i].length; j++) {
            if (wallpaper[i][j] === '#') {
                minRow = Math.min(minRow, i);
                minCol = Math.min(minCol, j);
                maxRow = Math.max(maxRow, i);
                maxCol = Math.max(maxCol, j);
            }
        }
    }
    
    // 드래그 시작점 (lux, luy)와 끝점 (rdx, rdy) 계산
    return [minRow, minCol, maxRow + 1, maxCol + 1];
}
