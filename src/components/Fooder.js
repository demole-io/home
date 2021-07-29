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
import IconReddit from '../assets/img/reddit.png'
import IconDiscord from '../assets/img/discord.png'
import IconTele from '../assets/img/telegram.png'

import IconYt from '../assets/img/Group 8103.png'

export default function Fooder() {
    return (
        <div id="fooder">
            <div className="container is-web">
                {/* <img src={Img} alt="photos"></img> */}
                {/* <div>
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
                </div> */}

                <div>
                    <p className="title">CONTACT</p>
                    <div>
                        <p>
                            <a href='https://www.instagram.com/demole.io' target="_blank" without rel="noreferrer">
                                <img src={IconIg} alt="photos"></img>
                            </a>
                        </p>

                        <p>
                            <a href='https://www.facebook.com/Demoleio-701276920706670' target="_blank" without rel="noreferrer">
                                <img src={IconFb} alt="photos"></img>
                            </a>
                        </p>


                        <p>
                            <a href='https://twitter.com/io_demole' target="_blank" without rel="noreferrer">
                                <img src={TweetIcon} alt="photos"></img>
                            </a>
                        </p>

                        <p>
                            <a href='https://www.reddit.com/user/Demole_io' target="_blank" without rel="noreferrer">
                                <img src={IconReddit} alt="photos"></img>
                            </a>
                        </p>

                        <p>
                            <a href='https://discord.com/channels/870208368743153725/870208369347153971' target="_blank" without rel="noreferrer">
                                <img src={IconDiscord} alt="photos"></img>
                            </a>
                        </p>

                        <p>
                            <a href='https://t.me/demole_io' target="_blank" without rel="noreferrer">
                                <img src={IconTele} alt="photos"></img>
                            </a>
                        </p>

                        <p>
                            <a href='https://t.me/Demole_ioCommunity' target="_blank" without rel="noreferrer">
                                <img src={IconTele} alt="photos"></img>
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="container is-mobie">
                <div className="title">
                    {/* <p>ABOUT</p> */}
                    <p>CONTACT US</p>
                    {/* <p>FOLLOW US</p> */}
                </div>


                <div className="group1">
                    <p>
                        <a href='https://www.instagram.com/demole.io' target="_blank" without rel="noreferrer">
                            <img src={IconIg} alt="photos"></img>
                        </a>
                    </p>

                    <p>
                        <a href='https://www.facebook.com/Demoleio-701276920706670' target="_blank" without rel="noreferrer">
                            <img src={IconFb} alt="photos"></img>
                        </a>
                    </p>


                    <p>
                        <a href='https://twitter.com/io_demole' target="_blank" without rel="noreferrer">
                            <img src={TweetIcon} alt="photos"></img>
                        </a>
                    </p>

                    <p>
                        <a href='https://www.reddit.com/user/Demole_io' target="_blank" without rel="noreferrer">
                            <img src={IconReddit} alt="photos"></img>
                        </a>
                    </p>

                    <p>
                        <a href='https://discord.com/channels/870208368743153725/870208369347153971' target="_blank" without rel="noreferrer">
                            <img src={IconDiscord} alt="photos"></img>
                        </a>
                    </p>

                    <p>
                        <a href='https://t.me/demole_io' target="_blank" without rel="noreferrer">
                            <img src={IconTele} alt="photos"></img>
                        </a>
                    </p>

                    <p>
                        <a href='https://t.me/Demole_ioCommunity' target="_blank" without rel="noreferrer">
                            <img src={IconTele} alt="photos"></img>
                        </a>
                    </p>
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
