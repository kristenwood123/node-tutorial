// These are methods
const { readFileSync, writeFileSync } = require('fs')
console.log('start');
// const fs = require('fas')
// fs.readFileSync

// How to read from the file system
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');



//Creating a file
writeFileSync('./content/result-sync.txt',
 `Here is the result : ${first}, ${second}`,
  {flag: 'a'}
)


console.log('done with this task');
console.log('starting the next');