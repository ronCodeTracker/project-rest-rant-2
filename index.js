

//   Ronald Kiefer
//    ר ו נ  א ל ד 
//   February 24, 2022
//   rest-rant application back end programming
//   boot camp


const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(3000)

