function solution(dirs) {
    let x = 0;
    let y = 0; 
    let answer = 0; 
    const visited = new Set(); 

    
    const move = {
        'U': [0, 1],
        'D': [0, -1],
        'L': [-1, 0],
        'R': [1, 0]
    };

    for (let dir of dirs) {
        const [dx, dy] = move[dir];
        const nx = x + dx;
        const ny = y + dy;

        if (nx < -5 || nx > 5 || ny < -5 || ny > 5) {
            continue;
        }

        
        const path1 = `${x},${y}-${nx},${ny}`;
        const path2 = `${nx},${ny}-${x},${y}`;

        
        if (!visited.has(path1) && !visited.has(path2)) {
            answer += 1; 
            visited.add(path1);
            visited.add(path2); 
        }

        x = nx;
        y = ny;
    }

    return answer;
}
