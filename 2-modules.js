//Modules - Encapsulated Code(only share minimum)

//CommonJS, every file is module(by default)
const names = require('./4-names')
const sayHi = require('./5-utils');
const data = require('./6-alternative');
require('./7-mind-grenade')


sayHi('kristen')
sayHi(names.john)
sayHi(names.peter)