import React, { useState } from 'react'
import Metrix from '../assets/img/logo-metrix.png'
import Interchainventures from '../assets/img/logo-interchainventures.png'
import Lupa from '../assets/img/LupaX.png'
import DaoMaker from '../assets/img/dao-maker.svg'
import LDCapial from '../assets/img/ld-capital.svg'
import Gate from '../assets/img/gate-logo.png'

export default function Backed() {

    const [data2, setdata2] = useState([
        { img: DaoMaker },
        { img: LDCapial },
        { img: Gate }
    ])

    const [data, setdata] = useState([
        { img: Metrix },
        { img: Interchainventures },
        { img: Lupa }
    ])
    return (
        <div id="backed">
            <div className="container">
                <p className="title">BACKED BY</p>
                <div className="content" style={{ marginBottom: 50 }}>
                    {data2.map((value, index) => {
                        return <img src={value.img} width={250} alt="photos"></img>
                    })}
                </div>
                <div className="content">
                    {data.map((value, index) => {
                        return <img src={value.img} alt="photos"></img>
                    })}
                </div>

                <div className="sketchfab-embed-wrapper">
                    <iframe title="Demole.io Model 1" frameBorder="0" allowFullScreen allow="fullscreen; autoplay; vr" xr-spatial-tracking="1" execution-while-out-of-viewport="1" execution-while-not-rendered="1" web-share="1" src="https://sketchfab.com/models/6732e15989d5429f9af50bcf01448f48/embed?autostart=1&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_theme=dark"> </iframe>
                </div>
            </div>
        </div>
    )
}
