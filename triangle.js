const input=require('readline-sync')
let num=Number(input.question('Enter the number: '))
let i=1
let str=''
while (i<=num){
    str=str+'*'
    console.log(str)
    i++
}