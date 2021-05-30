import React, { useEffect, useState } from 'react';
import { API_KEY, imageUrl } from '../../constants/constants';
import Youtube from 'react-youtube';
import axios from '../../axios';
import './Rowpost.css';

function Rowpost(props) {
    const [movies, setMovies] = useState([])
    const [urlid, setUrlId] = useState('')

    useEffect(() => {
        axios.get(props.url).then(response => {
            setMovies(response.data.results)
        }).catch(err => {
            alert(err)
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
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            // TODO: Unwanted code
            response.data.results.length !== 0 ? setUrlId(response.data.results[0]) : console.log('bbb' + response.data)
        })
    }

    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {
                    movies.map((item) => 
                        <img key={item.id} onClick={() => handle_movie(item.id)} className={props.isBig ? 'poster' : 'small_poster'} src={`${imageUrl + item.backdrop_path}`} alt="" />
                    )
                }
            </div>
            { urlid && <Youtube opts={opts} videoId={urlid.key}/>}
        </div>
    )
}

export default Rowpost
