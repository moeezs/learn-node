const path = require('path')


console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'test.txt') // this is how to make a file path

console.log(filePath); // /content/subfolder/test.txt

const base = path.basename(filePath)
console.log(base); // returns last item

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')

console.log(absolute)
// /Users/moeez/Documents/Big Things/Learning/MERN.js/freeCC tut/2-modules/built-in-modules/content/subfolder/test.txt