import React from 'react'
import Poster from '../assets/img/RongFX3.png'
import Giff from '../assets/img/RongFX3.webm'
import Phonee from '../assets/img/phone1.png'
import Vector from '../assets/img/Group 8120.png'
export default function PhoneScreen() {

    const isIOS = (/iPad|iPhone|iPod/.test(navigator.platform) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
        !window.MSStream

    return (
        <div id="phone-screen">
            <div className="container">
                <div className="waper-phone">
                    {!isIOS && <video className="wrapper" autoPlay={true} loop={true} src={Giff} type="video/webm" muted={true}></video>}
                    {isIOS && <img src={Poster} alt="photos" className="wrapper"></img>}
                    <img src={Phonee} alt="photos" className="phone"></img>
                </div>


                <div className="waper-text">
                    <p>Defi Monster Legends</p>
                    <img src={Vector} alt="photos"></img>
                    <span>Build your own army of monsters and embark on a journey to liberate the holy land.</span>
                </div>
            </div>
        </div>
    )
}
