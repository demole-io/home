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
import Gate from '../assets/LOGO/gate-io.png'
import Raptor from '../assets/LOGO/logo.png'
import Newave from '../assets/LOGO/Newave Capital logo1.svg'
import Au21 from '../assets/LOGO/Au21logo.png'
import Capstonetrade from '../assets/LOGO/footer_logo.png'
import M6 from '../assets/LOGO/M6.png'
import Evg from '../assets/LOGO/evg.svg'
import Rikkei from '../assets/LOGO/77c4d5f.png'
import GameStarter from '../assets/LOGO/Game-Starter-01.png'
import UG from '../assets/LOGO/venture.png'

export default function Backed() {
    const [data] = useState([
        { img: DaoMaker },
        { img: LupaX },
        { img: MetrixCapital },
        { img: Gate },
        { img: GameStarter },
        { img: LDCapital },
        { img: M6 },
        { img: Magnus },
        { img: Au21 },
        { img: logoX21 },
        { img: BasicCapital },
        { img: ConsensusLab },
        { img: Kirin },
        { img: Raptor },
        { img: UG },
        // { img: Interchain },
        // { img: Newave },
        // { img: Au21 },
        // { img: Capstonetrade },
        // { img: Evg },
        // { img: Rikkei }
    ])
    return (
        <div id="backed">
            <div className="container">
                <p className="title">BACKED BY</p>
                <div className="content">
                    {data.map((value, index) => {
                        return <div key={index}>
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
