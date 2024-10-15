process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    for (i = 1; i<=b; i++) { 
        var acd = ''
        for (j = 1; j<=a; j++) {
            acd += '*'
        }
        console.log(acd)
    }
});