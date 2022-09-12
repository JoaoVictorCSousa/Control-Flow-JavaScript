const prompt = require('prompt-sync')()

const a = prompt('Type the first number: ')
const aa = Number(a)

const b = prompt('Type the second number: ')
const bb = Number(b)

const c = prompt('Type the last number: ')
const cc = Number(c)

if(aa<bb && bb<cc)
console.log(`${aa}, ${bb}, ${cc}`)
if(aa<cc && cc<bb)
console.log(`${aa},${cc}, ${bb}`)

if(bb<aa && aa<cc)
console.log(`${bb},${aa},${cc}`)
if(bb<cc && cc<aa)
console.log(`${bb},${cc},${aa}`)

if(cc<aa && aa<bb)
console.log(`${cc}, ${aa},${bb}`)
if(cc<bb && bb<aa)
console.log(`${cc},${bb},${aa}`)


