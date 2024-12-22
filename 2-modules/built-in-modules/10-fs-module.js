const {readFileSync, writeFileSync} = require('fs') // this only takes out those two modules from fs
// you can do fs.readFileSync. to access them too
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//console.log(first, second); // Hello this is first text file Hello this is second text file


writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`)
// overwrites if file alr there
// create file if not there

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`, { flag: 'a' })
// this will append to the file