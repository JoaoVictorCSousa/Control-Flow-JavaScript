const prompt = require('prompt-sync')()

const idadee = prompt('Qual é a sua idade?')
const idade = Number(idadee)

if(idade>=10 && idade<=14)
console.log(`You are in children's category!`)

if(idade>=15 && idade<=17)
console.log(`You are in teen's category!`)

if(idade>=18 && idade<=25)
console.log(`You are in adult's category!`)

if(idade>25 || idade<10)
console.log(`You are not in any category!`)