import React, { useEffect, useState } from 'react';
import { main, videos } from '../../Connections/constants';
import axios from '../../Connections/axios';
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState();

    useEffect(() => {
        axios.get(videos.trending).then((response) => {
            setMovie(response.data.results[Math.floor(Math.random() * 10) + 1])
        })
    }, [])

    return (
        <header className="banner"
            style={{ backgroundImage: `url(${movie ? main.image + movie.backdrop_path : ""})` }}>
            <div className="content">
                <h1 className="title">{movie ? movie.title : ""}</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="description">{movie ? movie.overview : ""}</h1>
            </div>
            <div className="fade_bottom"></div>
        </header>
    )
}

export default Banner
