import React from 'react'
import Rowpost from '../Components/Rowpost/Rowpost'
import { movies } from '../Connections/constants'

function Movies() {
    return (
        <div>
            <Rowpost url={movies.action} title="Action" />
            <Rowpost url={movies.comedy} title="Comedy" />
            <Rowpost url={movies.horror} title="Horror" />
            <Rowpost url={movies.romance} title="Romance" />
        </div>
    )
}

export default Movies
