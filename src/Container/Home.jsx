import React from 'react'
import Rowpost from '../Components/Rowpost/Rowpost'
import { documentaries, originals, trending } from '../constants/urls'

function Home() {
    return (
        <div> 
            <Rowpost url={originals} title="Netflix Originals" isBig />
            <Rowpost url={trending} title="Trending" />
            <Rowpost url={documentaries} title="Documentries" />
        </div>
    )
}

export default Home
