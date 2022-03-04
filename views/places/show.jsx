



const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
                <h1>Show Page</h1>
                <h2>{data.place.name}</h2>
                <p className="text-center">
                    {data.place.cuisines}
                </p>
                <img src={data.place.pic} alt={data.place.name} width="250"></img>
                <p className="text-center">
                    Located in {data.place.city}, {data.place.state}
                </p>
                <div>
                    <h2>Rating</h2>
                    <p>currently unrated</p>
                </div>
                <div>
                    <h2>Comments</h2>
                    <p>No comments yet!</p>
                </div>

                

                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>

          </main>
        </Def>
    )
}

module.exports = show



