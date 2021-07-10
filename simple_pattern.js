const input=require('readline-sync')
let num=Number(input.question('Enter the number: '))
let i=1
let str=''
while (i<=num){
    let j=1
    while (j<=num){
        str=str+'*'
        j++
    }
    str += "\n"
    i++    
}
console.log(str)
