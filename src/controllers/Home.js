import React, { Suspense } from 'react'
import Phone from '../assets/img/phone1.png'

export default function Home() {

    return (
        <div id="home">
            <div className="container">
                <p className="title">NEXT GENERATION GAMING</p>
                <p className="content">USE STRATEGY, LOGIC & PROBABILITY TO WIN</p>
                <div className="waper-phone">
                    <div class="sketchfab-embed-wrapper">
                        <iframe title="Demole.io Model 1" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="fullscreen; autoplay; vr" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/6732e15989d5429f9af50bcf01448f48/embed?autostart=1&transparent=1"> </iframe>
                    </div>
                    <img src={Phone} alt="photos" className="phone"></img>
                </div>
            </div>

        </div>
    )
}
