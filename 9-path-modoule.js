const path = require('path')

console.log(path.sep);

const filePath = path.join('/content','subfolder','best.txt')
// console.log(filePath);

//if I only want the last portion
const base = path.basename(filePath)
// console.log(base);

//Path.resolve - returns an absolute path

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);