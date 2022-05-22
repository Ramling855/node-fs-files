const fs=require('fs')
// fs.mkdir('ram',(err,data)=>{

//   console.log('folder crated')
//   console.log(err)
//   console.log(data)
// })
// fs.writeFile('./ram/bio.html','my name is Ramling',(err,data)=>{
//   console.log('done')
//   console.log(err)
//   console.log(data)
// })
// fs.appendFile('./ram/bio.html','ok do something',(err)=>{
//   console.log(err)
// })
// fs.readFile('./ram/bio.txt','utf-8',(err)=>{
//     console.log(err)

// })
// fs.rename('./ram/rambio.txt','./ram/tata.txt',(err)=>{
//   console.log('okk') 
//   console.log(err)
// })
// fs.unlink('./ram/bio.html',(err,data)=>{
//     console.log(err)
// })
fs.rmdir('./ram',(err)=>{
  console.log('ok')
});