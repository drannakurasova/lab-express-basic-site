const express = require('express')
const app = express()
const port = 3001

app.use((req, res, next)=>{
    console.log("Esto se ejecuta siempre");
    next()
})

app.get("/home",(req, res, next)=>{

    res.sendFile(__dirname + "/views/home.html" )
})

app.get("/about",(req, res, next)=>{
    res.sendFile(__dirname + "/views/about.html")
})

app.get("/home/:pages",(req, res, next)=>{
    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })