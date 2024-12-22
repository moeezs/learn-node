// npm - global command
// npm --version

// local dependancy - use it only in this particular project (usually use this)
// npm i <pkg-name>

// global dependancy - use it in any project
// sudo npm install -g <pkg-name>

// package.json - manifest file (stores important info about project/package) thhis will leep updating as you install more packages
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)


const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)