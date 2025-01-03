import express from "express"
const app=express()
const port=3000
app.get("/",(req,res)=>{
    res.send("<h1>Hola mundo</h1>")
})
app.use(express.static('public'))
app.listen(port,()=>{
    console.log(`ingresar al siguiente puerto: http://localhost:${port}/`)    
})