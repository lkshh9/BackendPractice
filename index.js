require('dotenv').config()


const express = require('express')
const app = express()

const port = process.env.PORT

app.get('/', (req,res) => {
    res.send("hello lokesh")
})

app.get('/login', (req,res) => {
    res.send("please login")
})

app.get('/signup', (req,res) => {
    res.send("signup here")
})

console.log("crack backend interview")

app.listen(port, () => {
    console.log(`Example app listening on port  ${port}`)
})