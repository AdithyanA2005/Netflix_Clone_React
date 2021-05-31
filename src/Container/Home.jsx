import React from 'react';
import Rowpost from '../Components/Rowpost/Rowpost';
import { videos } from '../Connections/constants';

function Home() {
    return (
        <div> 
            <Rowpost url={videos.originals} title="Netflix Originals" isBig />
            <Rowpost url={videos.trending} title="Trending" />
            <Rowpost url={videos.documentaries} title="Documentries" />
        </div>
    )
}

export default Home
