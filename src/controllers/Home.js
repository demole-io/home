import React, { Suspense } from 'react'
import Phone from '../assets/img/Galaxy S10+ Mockup.png'

export default function Home() {

    return (
        <div id="home">
            <div className="container">
                <p className="title">Defi Monster Legends</p>
                <p className="content">A vast monster world on Blockchain</p>
                {/* <div className="waper-phone">
                    <div class="sketchfab-embed-wrapper">
                        <iframe title="Demole.io Model 1" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="fullscreen; autoplay; vr" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/6732e15989d5429f9af50bcf01448f48/embed?autostart=1&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_theme=dark"> </iframe>
                    </div>
                    <img src={Phone} alt="photos" className="phone"></img>
                </div> */}

                <div className="group">
                    <p>Our early world was in chaos. Many monster races lived on the same continents and oceans. They were born from the seeds of both gods and demons, some of them coming from the universe. The races often war to expand their territory and show their strength and ambition to dominate the world.
                        <br></br>
                        <br></br>
                        However, races now have to join together to increase their strength to fight common enemies - beasts born from the death machines.
                        <br></br>
                        <br></br>
                        Build your own army of monsters and embark on a journey to liberate the holy land.
                    </p>

                    <img src={Phone} alt="photos" className="phone"></img>
                </div>
            </div>

        </div>
    )
}
