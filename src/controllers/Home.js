import React, { useEffect } from 'react'
import Phone from '../assets/img/phone1.png'
import Giff from '../assets/img/RongFX3.webm'
import Poster from '../assets/img/RongFX3.png'
import Logo from '../assets/img/logo02 1.png'
import $ from 'jquery'

export default function Home() {

    const isIOS = (/iPad|iPhone|iPod/.test(navigator.platform) ||
        (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)) &&
        !window.MSStream


    const handleScroll = () => {
        const pageHome = document.querySelector("#home")

        if (pageHome.getBoundingClientRect().top <= 0) {
            $('#home .container .group p').addClass('text-move-top')
        }
        //BOTTOM
        if (pageHome.getBoundingClientRect().bottom <= 0) {
            $('#home .container .group p').removeClass('text-move-top')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            $('#home .container .group p').removeClass('text-move-top')
        }
    }, []);

    return (
        <div id="home">
            <div className="container">
                <img className="title" src={Logo} alt="photos"></img>
                <p className="content">A vast monster world on Blockchain</p>

                <div className="group">
                    <p>Our early world was in chaos. Many monster tribes lived on the same continents and oceans. They were born from the seeds of both gods and demons, some of them coming from the universe. The tribes often war to expand their territory and show their strength and ambition to dominate the world.
                        <br></br>
                        <br></br>
                        However, tribes now have to join together to increase their strength to fight common enemies - beasts born from the death machines.
                        <br></br>
                        <br></br>
                        Build your own army of monsters and embark on a journey to liberate the holy land.
                    </p>

                    <div className="sketchfab-embed-wrapper">
                        <iframe title="Demole.io Model2" frameBorder="0" allowFullScreen allow="fullscreen; autoplay; vr" xr-spatial-tracking="1" execution-while-out-of-viewport="1" execution-while-not-rendered="1" web-share="1" src="https://sketchfab.com/models/9f1e5f3fea9e4ebfb2062cb6be4ce46b/embed?transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&autostart=1"> </iframe>
                    </div>
                </div>


                <div className="waper-phone">
                    {!isIOS && <video className="wrapper" autoPlay={true} loop={true} src={Giff} type="video/webm" muted={true}></video>}
                    {isIOS && <img src={Poster} alt="photos" className="wrapper"></img>}
                    <img src={Phone} alt="photos" className="phone"></img>
                </div>


            </div>

        </div>
    )
}
