// https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
// 'use strict';

// const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.stdin.on('end', _ => {
//     inputString = inputString.replace(/\s*$/, '')
//         .split('\n')
//         .map(str => str.replace(/\s*$/, ''));

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    n = Math.floor(n / 2);
    let pairS = 0;
    for (let i = 0; i < ar.length; i++){
        for (let j = i+1; j < ar.length; j++){
            if (ar[i] === ar[j] && ar[i] !== '' && ar[j] !== '') {
                pairS++;
                if (pairS === n) {
                    i = ar.length;
                    j = ar.length;
                }
                ar[i] = '';
                ar[j] = '';
                j = ar.length;
            }
        }
    }

    return pairS;
}

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const n = parseInt(readLine(), 10);

//     const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

//     let result = sockMerchant(n, ar);

//     ws.write(result + "\n");

//     ws.end();
// }
