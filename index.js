const fs=require('fs');
fs.writeFileSync('read.txt','welcom');
fs.appendFileSync('read.txt','ffffffffffffhhhhhhhhhhh')
const tata=fs.readFileSync('read.txt')
const fafa=tata.toString();
console.log(fafa)
fs.rename('read.txt','readwrite.txt')