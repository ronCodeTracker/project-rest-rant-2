
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
        res.render('places/show', {place: places[id], id})//details about a place
    }
    
})



router.get('/:id/edit', (req, res) => {

    let idd = Number(req.params.id)
    if (isNaN(idd)) {
        res.render('error404')
    }
    else if (!places[idd]) {
        res.render('error404')
    }
    else {
        res.render('places/edit', {
            place: places[req.params.id],
            index: req.params.id
        })
        console.log('id' + req.params.id)
    }

})//page for editing a place


//router.put?  update a place  (places/:id)
router.put('/:id', (req, res) => {


    console.log(Number(req.params.id))
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        // Dig into req.body and make sure data is valid
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

        // Save the new data into places[id]
        places[id] = req.body
        res.redirect(`/places/${id}`)
    }

    

})

//router.delete delete a place (places/:id)
router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        places.splice(id, 1)
        res.redirect('/places')
    }
})

router.post('/:id/rant', (req, res) => {
    res.send('POST/places/:id/rant')
})// comment about a place

//router.delete? delete comment about a place (/places/:id/rant/:rantId)



module.exports = router






