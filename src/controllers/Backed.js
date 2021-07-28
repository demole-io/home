import React, { useState } from 'react'
import Bingbon from '../assets/img/bingbon1.png'
import Bitcoin from '../assets/img/NoPath.png'
import Okex from '../assets/img/OKEX1.png'
import Directid from '../assets/img/directid-logo.png'
import Drope from '../assets/img/dropel.png'
import Ftx from '../assets/img/ftx.png'
import Ccn from '../assets/img/NoPath - Copy (2).png'
import Huobi from '../assets/img/组件.png'
import Easypost from '../assets/img/easypost_logo.png'
import Bibox from '../assets/img/Group 8090.png'
import Binance from '../assets/img/NoPath - Copy (7).png'
import Monero from '../assets/img/NoPath - Copy (9).png'

import '@google/model-viewer';

export default function Backed() {

    const [data, setdata] = useState([
        { img: Bingbon },
        { img: Bitcoin },
        { img: Okex },
        { img: Directid },
        { img: Drope },
        { img: Ftx },
        { img: Ccn },
        { img: Huobi },
        { img: Easypost },
        { img: Bibox },
        { img: Binance },
        { img: Monero },
    ])
    return (
        <div id="backed">
            <div className="container">
                <div className="waper-title">
                    <p className="title">BACKED BY</p>
                    <p className="big-title">BACKED BY</p>
                </div>
                <div className="content">
                    {/* {data.map((value, index) => {
                        return <img src={value.img} alt="photos"></img>
                    })} */}
                </div>

                {/* <div class="sketchfab-embed-wrapper">
                    <iframe title="Demole.io Model 1" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="fullscreen; autoplay; vr" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/6732e15989d5429f9af50bcf01448f48/embed?autostart=1&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_theme=dark"> </iframe>
                </div> */}
            </div>
        </div>
    )
}
