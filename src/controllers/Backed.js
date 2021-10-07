import React, { useState } from 'react'

import AC from '../assets/LOGO/AC.svg'
import BasicCapital from '../assets/LOGO/5496986_1620279486.png'
import ConsensusLab from '../assets/LOGO/Top002070-logo1.png'
import DaoMaker from '../assets/LOGO/dao-maker.svg'
import Interchain from '../assets/LOGO/logo-interchainventures.png'
import K24 from '../assets/LOGO/K24 Venture.png'
import Kirin from '../assets/LOGO/Kirin.png'
import LDCapital from '../assets/LOGO/ld-capital.svg'
import logoX21 from '../assets/LOGO/x21-logo.png'
import LupaX from '../assets/LOGO/LupaX.png'
import Magnus from '../assets/LOGO/MagnusLogo-PSD_white.png'
import MetrixCapital from '../assets/LOGO/logo-metrix.png'
import Gate from '../assets/LOGO/gate-logo.png'
import Raptor from '../assets/LOGO/logo.png'
import Newave from '../assets/LOGO/Newave Capital logo1.svg'

export default function Backed() {
    const [data, setdata] = useState([
        { img: AC },
        { img: BasicCapital },
        { img: ConsensusLab },
        { img: DaoMaker },
        { img: Interchain },
        { img: K24 },
        { img: Kirin },
        { img: LDCapital },
        { img: logoX21 },
        { img: LupaX },
        { img: Magnus },
        { img: MetrixCapital },
        { img: Gate },
        { img: Raptor },
        { img: Newave },
    ])
    return (
        <div id="backed">
            <div className="container">
                <p className="title">BACKED BY</p>
                <div className="content">
                    {data.map((value, index) => {
                        return <div>
                            <img src={value.img} alt="photos"></img>
                        </div>
                    })}
                </div>

                <div className="sketchfab-embed-wrapper">
                    <iframe title="Demole.io Model 1" frameBorder="0" allowFullScreen allow="fullscreen; autoplay; vr" xr-spatial-tracking="1" execution-while-out-of-viewport="1" execution-while-not-rendered="1" web-share="1" src="https://sketchfab.com/models/6732e15989d5429f9af50bcf01448f48/embed?autostart=1&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_theme=dark"> </iframe>
                </div>
            </div>
        </div>
    )
}
