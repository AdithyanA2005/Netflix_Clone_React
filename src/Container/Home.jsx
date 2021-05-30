import React from 'react'
import Rowpost from '../Components/Rowpost/Rowpost'
import { originals, trending } from '../constants/urls'

function Home() {
    return (
        <div> 
            <Rowpost url={originals} title="Netflix Originals" isBig />
            <Rowpost url={trending} title="Trending" />
        </div>
    )
}

export default Home
