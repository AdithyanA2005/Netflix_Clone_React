import React from 'react'
import Rowpost from '../Components/Rowpost/Rowpost'
import { action_movies, comedy_movies, horror_movies, romance_movies } from '../constants/urls'

function Movies() {
    return (
        <div>
            <Rowpost url={action_movies} title="Action" />
            <Rowpost url={comedy_movies} title="Comedy" />
            <Rowpost url={horror_movies} title="Horror" />
            <Rowpost url={romance_movies} title="Romance" />
        </div>
    )
}

export default Movies
