
// name:  Ronald Kiefer
// Hebrew name:   ר ו נ  א ל ד
// date:  February 24, 2022  Thursday
// description:  js controller file for rest-rant app


const router = require('express').Router()
const places = require("../models/places")

router.get('/', (req, res) => {

    
    //let places = []

    res.render('places/index', {places})
})


router.post('/', (req, res) => {
    console.log(req.body)
    // create new place
    if (!req.body.pic) {
        // Default image if one is not provided
        req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        req.body.city = 'Anytown'
    }
    if (!req.body.state) {
        req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
})

router.get('/new', (req, res) => {
    res.render('places/new')// form page for creating new place
})

router.get('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        res.render('places/show', {place: places[id]})//details about a place
    }
    
})

//router.put?  update a place  (places/:id)

router.get('/id/edit', (req, res) => {
    res.send('GET/places/:id/edit')
})//page for editing a place

//router.delete delete a place (places/:id)

router.post('/:id/rant', (req, res) => {
    res.send('POST/places/:id/rant')
})// comment about a place

//router.delete? delete comment about a place (/places/:id/rant/:rantId)



module.exports = router






