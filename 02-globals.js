console.log(`this is the output for the dirname global -- ${__dirname}`)
console.log(`this is the output for the filename global -- ${__filename}`)
console.log(`this is the output for the require global -- ${require}`)
console.log(`this is the output for the module global -- ${module}`)
console.log(`this is the output for the process global -- ${process}`)
setInterval(()=>{
    console.log(`hello world`)
}, 1000)