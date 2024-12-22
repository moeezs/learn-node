// local
const secret = 'SUPER SECRET'

//share
const peter = 'peter'
const john = 'john'

module.exports = { peter, john }
//   exports: { peter: 'peter', john: 'john' },

// see how to access it in 3-modules.js

//console.log(module)
/* {
  id: '.',
  path: '/Users/moeez/Documents/Big Things/Learning/MERN.js/freeCC tut',
  exports: {},
  filename: '/Users/moeez/Documents/Big Things/Learning/MERN.js/freeCC tut/4-modules-names.js',
  loaded: false,
  children: [],
  paths: [
    '/Users/moeez/Documents/Big Things/Learning/MERN.js/freeCC tut/node_modules',
    '/Users/moeez/Documents/Big Things/Learning/MERN.js/node_modules',
    '/Users/moeez/Documents/Big Things/Learning/node_modules',
    '/Users/moeez/Documents/Big Things/node_modules',
    '/Users/moeez/Documents/node_modules',
    '/Users/moeez/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ],
  [Symbol(kIsMainSymbol)]: true,
  [Symbol(kIsCachedByESMLoader)]: false,
  [Symbol(kIsExecuting)]: true
}
  */

//Whatever you put in exports will be accessible everywhere