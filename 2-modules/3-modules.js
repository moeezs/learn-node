// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-modules-names') // start with ./ with modules we create
const sayHi = require('./5-modules-utils')
const data = require('./6-modules-alternative-flavor')
require('./7-modules-mind-grenade') // this just runs the module

const { john, peter } = names


sayHi('Moeez')
sayHi(peter) // or names.peter
sayHi(john)