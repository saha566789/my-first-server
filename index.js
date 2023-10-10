const express = require('express')
const app = express()
const port = 5000;

app.get('/',(req,res)=>{
    res.send('hello world')
})


app.get('/data',(req,res)=>{
    res.send('more data commingsoom')
})
app.listen(port,()=>{
    console.log(`my server:${port}`)
})