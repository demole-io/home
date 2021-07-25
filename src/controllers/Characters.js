import React from 'react'
import ArrowLeft from '../assets/img/Frame1.png'
import ArrowRight from '../assets/img/Frame.png'
import Unknow1 from '../assets/img/Subtract.png'
import Knight from '../assets/img/Frame2.png'
import Wizard from '../assets/img/Frame3.png'
import Archery from '../assets/img/Frame4.png'
import Character from '../assets/img/rong 2.png'
import Unknow2 from '../assets/img/Subtract1.png'
import Cirke from '../assets/img/Ellipse 15.png'
import Unknow3 from '../assets/img/Frame 77.png'
import Unknow4Mobie from '../assets/img/Group 8094.png'

export default function Characters() {
    return (
        <div id="characters">
            <div className="container">
                <p className="title">Characters</p>

                <div className="content">
                    <img className="arrow" src={ArrowLeft} alt="photos"></img>

                    <div className="group1">
                        <img className="hmm" src={Unknow1} alt="photos"></img>
                        <div>
                            <img className="Knight" src={Knight} alt="photos"></img>
                            <img className="Wizard" src={Wizard} alt="photos"></img>
                            <img className="Archery" src={Archery} alt="photos"></img>
                        </div>
                    </div>

                    <img className="Character" src={Character} alt="photos"></img>

                    <div className="group2">
                        <img className="hmmm" src={Unknow2} alt="photos"></img>
                        <div>
                            <img src={Cirke} alt="photos"></img>
                            <p>Faraland are exquisitely digital collectibles created using blockchain technology.</p>
                            <img src={Unknow3} alt="photos"></img>
                        </div>
                    </div>

                    <img className="arrow" src={ArrowRight} alt="photos"></img>
                </div>

                <div className="group2-mobie">
                    <img className="hmmm" src={Unknow4Mobie} alt="photos"></img>
                    <div className="child">
                        <div>
                            <p className="name">DRAGON WARRIOR</p>
                            <p className="des">Faraland are exquisitely digital collectibles created using blockchain technology.</p>
                        </div>

                        <img src={Unknow3} alt="photos"></img>
                    </div>
                </div>

                <p className="txt">Faraland are exquisitely digital collectibles created using blockchain technology. Each collectible is matchless, genuine and varies in rarity. Faraland Universe has a lot of different races like human, orc, angel, demon, dragonborn, elf and fairy which are waiting for the user to discover.
                    Last but not least, Faraland is also a multiplayer RPG NFT GAME that lets user engaging in the combat arena and profit from battles</p>

            </div>
        </div>
    )
}
