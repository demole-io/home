import React from 'react'
import Phonee from '../assets/img/phone1.png'
import Vector from '../assets/img/Group 8120.png'

export default function PhoneScreen() {

    // const isIOS = (/iPad|iPhone|iPod/.test(navigator.platform) ||
    //     (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
    //     !window.MSStream

    return (
        <div id="phone-screen">
            <div className="container">
                <div className="waper-phone">
                    {/* {!isIOS && <video className="wrapper" autoPlay={true} loop={true} src={Giff} type="video/webm" muted={true}></video>}
                    {isIOS && <img src={Poster} alt="photos" className="wrapper"></img>} */}
                    <iframe src='https://www.youtube.com/embed/IHxXy2s6GGM?&autoplay=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=IHxXy2s6GGM&mute=1'
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                        className="wrapper"
                    />
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
