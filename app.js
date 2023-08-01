const express = require('express')
const app = express()
const port = 3001

app.use (express.static("public") )

app.use((req, res, next)=>{
    
    next()
})

app.get("/home",(req, res, next)=>{

    res.sendFile(__dirname + "/views/home.html" )
})

app.get("/about",(req, res, next)=>{
    res.sendFile(__dirname + "/views/about.html")
})

app.get("/works",(req, res, next)=>{
    res.sendFile(__dirname + "/views/works.html")
})

app.get("/photogallery",(req, res, next)=>{
    res.sendFile(__dirname + "/views/photogallery.html")
})

// app.get("/home/:pages",(req, res, next)=>{
//     if (req.params.pages === "works") {
//         res.sendFile(__dirname + "/views/works.html")
//     }
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })