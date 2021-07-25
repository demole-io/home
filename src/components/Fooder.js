import React from 'react'
import Img from '../assets/img/Mask Group4.png'

import TweetIcon from '../assets/img/Group.png'
import FbIcon from '../assets/img/brandico_facebook.png'
import InIcon from '../assets/img/brandico_linkedin.png'
import YtIcon from '../assets/img/Group3.png'
import IgIcon from '../assets/img/ant-design_instagram-filled.png'

import IconFb from '../assets/img/Group 8105.png'
import IconTweet from '../assets/img/Group 8106.png'
import IconIg from '../assets/img/Group 8107.png'
import IconYt from '../assets/img/Group 8103.png'

export default function Fooder() {
    return (
        <div id="fooder">
            <div className="container is-web">
                <img src={Img} alt="photos"></img>
                <div>
                    <p className="title">ABOUT</p>
                    <p>Project Overview</p>
                    <p>Token Metrics</p>
                    <p>Gameplay</p>
                </div>

                <div>
                    <p className="title">FAQ</p>
                    <p>Disclaimer</p>
                    <p>Disclaimer</p>
                    <p>Token Address</p>
                </div>

                <div>
                    <p className="title">CONTACT</p>
                    <p> <img src={TweetIcon} alt="photos"></img> /demole.io</p>
                    <p> <img src={FbIcon} alt="photos"></img> /demole.io</p>
                    <p> <img src={InIcon} alt="photos"></img> /demole.io</p>
                    <p> <img src={YtIcon} alt="photos"></img> /demole.io</p>
                    <p> <img src={IgIcon} alt="photos"></img> /demole.io</p>
                </div>
            </div>

            <div className="container is-mobie">
                <div className="title">
                    <p>ABOUT</p>
                    <p>CONTACT US</p>
                    <p>FOLLOW US</p>
                </div>


                <div className="group1">
                    <img src={IconFb} alt="photos"></img>
                    <img src={IconTweet} alt="photos"></img>
                    <img src={IconIg} alt="photos"></img>
                    <img src={IconYt} alt="photos"></img>
                </div>

                <div className="line"></div>

                <p className="txt">Copyright © 2021 Laaqiq. <br></br> All Rights Reserved.</p>

                <div className="group2">
                    <p>Terms of Use</p>
                    <p>Privacy Policy</p>
                </div>

            </div>

        </div>
    )
}
