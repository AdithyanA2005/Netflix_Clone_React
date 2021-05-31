import React, { useEffect, useState } from 'react';
import { main } from '../../Connections/constants';
import Youtube from 'react-youtube';
import axios from '../../Connections/axios';
import './Rowpost.css';

function Rowpost(props) {
    const [movies, setMovies] = useState([])
    const [urlid, setUrlId] = useState('')

    useEffect(() => {
        axios.get(props.url).then(response => {
            setMovies(response.data.results)
        })
    })

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const handle_movie = (id) => {
        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${main.key}&language=en-US`).then(response => {
            // TODO: Unwanted code
            response.data.results.length !== 0 ? setUrlId(response.data.results[0]) : alert("you need to have premium subscription to play this")
        })
    }

    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {
                    movies.map((item) => {
                        return (
                            <div className="movie">
                                <img key={item.id} onClick={() => handle_movie(item.id)} className={props.isBig ? 'poster' : 'small_poster'} src={`${main.image + item.backdrop_path}`} alt="" />
                                <div className="premium"></div>
                            </div>
                        )
                    })
                }
            </div>
            { urlid && <Youtube opts={opts} videoId={urlid.key} />}
        </div>
    )
}

export default Rowpost
