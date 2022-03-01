


const React = require('react')
const Def = require('./default')



function home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/food.jpg" width="200"alt="pancakes for everyone" />
                </div>
                <div>
                    Photo by <a href="https://unsplash.com/photos/eeqbbemH9-c">Chad Montano</a> on <a href="unsplash.com">Unsplash</a>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                    </a>
                </div>
            </main>
        </Def>
    )
}


module.exports = home


