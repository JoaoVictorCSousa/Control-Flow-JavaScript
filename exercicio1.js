const prompt = require('prompt-sync')()

const a = prompt('Type the first number: ')
const aa = Number(a)

const b = prompt('Type the second number: ')
const bb = Number(b)

const c = prompt('Type the last number: ')
const cc = Number(c)

if(aa>bb && aa>cc)
console.log(`${aa} is the biggest.`)

if(bb>aa & bb>cc)
console.log(`${bb} is the biggest`)

if(cc>aa && cc>bb)
  console.log(`${cc} is the biggest.`)
