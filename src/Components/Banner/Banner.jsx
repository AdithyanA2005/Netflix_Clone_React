import React from 'react';
import './Banner.css'

function Banner() {
    return (
        <header className="banner">
            <div className="content">
                <h1 className="title">Movie Name</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis fugit maxime nesciunt nam qui, harum quam. Iusto vel libero minus molestias cumque enim nulla aliquid maiores, assumenda voluptatum nemo saepe!</h1>
            </div>
            <div className="fade_bottom"></div>
        </header>
    )
}

export default Banner
