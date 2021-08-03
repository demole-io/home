import React from 'react'
import Phonee from '../assets/img/phone1.png'
import Vector from '../assets/img/Group 8120.png'
import Vid from '../assets/img/BG16-9_1.mp4'
export default function PhoneScreen() {

    // const isIOS = (/iPad|iPhone|iPod/.test(navigator.platform) ||
    //     (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
    //     !window.MSStream

    return (
        <div id="phone-screen">
            <div className="container">
                <div className="waper-phone">
                    <div>
                        <video className="wrapper" autoPlay={true} loop={true} src={Vid} type="video/mp4" muted={true}></video>
                    </div>
                    <img src={Phonee} alt="photos" className="phone"></img>
                </div>


                <div className="waper-text">
                    <p>Defi Monster Legends</p>
                    <div>
                        <img src={Vector} alt="photos"></img>
                    </div>
                    <span>Build your own army of monsters and embark on a journey to liberate the holy land.</span>
                </div>
            </div>
        </div>
    )
}
