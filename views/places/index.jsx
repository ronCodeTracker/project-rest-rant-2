



const React = require('react')
const Def = require('../default')

function Index(data) {
    let placesFormatted = data.places.map((place) => {
        return (
            <div key={place.name}>
                <h2>{place.name}</h2>
                <img src={place.pic} alt={place.name}></img>
            </div>
        )
    })
    return (
        <Def>
            <h2>PLACES INDEX PAGE</h2>
            {placesFormatted}
        </Def>
    )
}

module.exports = Index




