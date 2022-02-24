
// name:  Ronald Kiefer
// Hebrew name:   ר ו נ  א ל ד
// date:  February 24, 2022  Thursday
// description:  js controller file for rest-rant app


const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /places')
})

module.exports = router



