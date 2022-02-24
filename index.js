

//   Ronald Kiefer
//    ר ו נ  א ל ד 
//   February 24, 2022
//   rest-rant application back end programming
//   boot camp


require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})


app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)
