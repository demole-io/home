import React, { Suspense } from 'react'
import Phone from '../assets/img/phone1.png'
import Giff from '../assets/img/RongFX3.gif'

export default function Home() {

    return (
        <div id="home">
            <div className="container">
                <p className="title">Defi Monster Legends</p>
                <p className="content">A vast monster world on Blockchain</p>

                <div className="group">
                    <p>Our early world was in chaos. Many monster races lived on the same continents and oceans. They were born from the seeds of both gods and demons, some of them coming from the universe. The races often war to expand their territory and show their strength and ambition to dominate the world.
                        <br></br>
                        <br></br>
                        However, races now have to join together to increase their strength to fight common enemies - beasts born from the death machines.
                        <br></br>
                        <br></br>
                        Build your own army of monsters and embark on a journey to liberate the holy land.
                    </p>

                    <div className="waper-phone">
                        <div class="wrapper">
                            <img src={Giff} alt="photos"></img>
                        </div>
                        <img src={Phone} alt="photos" className="phone"></img>
                    </div>
                </div>
            </div>

        </div>
    )
}
