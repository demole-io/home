import React from 'react'
import TweetIcon from '../assets/img/Group.png'
import IconFb from '../assets/img/Group 8105.png'
import IconIg from '../assets/img/Group 8107.png'
import IconReddit from '../assets/img/reddit.png'
import IconDiscord from '../assets/img/discord.png'
import IconTele from '../assets/img/telegram.png'
import { Link } from "react-router-dom";
import ScrollUp from '../assets/img/Group 8162.png'
import $ from 'jquery'
import Logo from '../assets/img/demole-logo.png'

export default function Fooder() {

    const onClickScroll = () => {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".header").offset().top
        }, 2000);
    }

    return (
        <div id="fooder">
            <div className="container is-web">
                {/* <img src={Img} alt="photos"></img> */}

                <Link to="/">
                    <img src={Logo} alt="photos"></img>
                </Link>

                <p></p>
                <div className="cop-header">
                    {/* <p className="title">FAQ</p> */}
                    {/* <p>Summon</p>
                    <p>Marketplace</p>
                    <p>Stake</p>
                    <p>Pitch Deck</p>
                    <p>Demole-Wiki</p>
                    <p>Stake</p> */}


                    <li><Link to="/summon">Summon</Link></li>

                    <li className="tip">Marketplace<span>Coming Soon</span></li>
                    <li className="tip"><a href="https://app.demole.io/stake" target="_blank" rel="noreferrer">Stake</a></li>
                    <li>
                        <a href="/Demole_PitchDeck.pdf" target="_blank" rel="noopener noreferrer">Pitch Deck</a>
                    </li>
                    <li className="tip">Demole-Wiki<span>Coming Soon</span></li>
                </div>

                <div>
                    <p className="title">CONTACT</p>
                    <div>
                        <p>
                            <a href='https://www.instagram.com/demole.io' target="_blank" rel="noreferrer">
                                <img src={IconIg} alt="photos"></img>
                            </a>
                        </p>

                        <p>
                            <a href='https://www.facebook.com/Demoleio-701276920706670' target="_blank" rel="noreferrer">
                                <img src={IconFb} alt="photos"></img>
                            </a>
                        </p>


                        <p>
                            <a href='https://twitter.com/demoleio' target="_blank" rel="noreferrer">
                                <img src={TweetIcon} alt="photos"></img>
                            </a>
                        </p>

                        <p>
                            <a href='https://www.reddit.com/user/Demole_io' target="_blank" rel="noreferrer">
                                <img src={IconReddit} alt="photos"></img>
                            </a>
                        </p>

                        <p>
                            <a href='https://discord.gg/NZJBZ9xH8M' target="_blank" rel="noreferrer">
                                <img src={IconDiscord} alt="photos"></img>
                            </a>
                        </p>

                        <p>
                            <a href='https://t.me/Demoleio' target="_blank" rel="noreferrer">
                                <img src={IconTele} alt="photos"></img>
                            </a>
                        </p>

                        <p>
                            <a href='https://t.me/Demole_ioCommunity' target="_blank" rel="noreferrer">
                                <img src={IconTele} alt="photos"></img>
                            </a>
                        </p>
                    </div>
                    <p>Email: business@demole.io</p>
                </div>

                <img className="srollUp" src={ScrollUp} alt="photos" onClick={() => onClickScroll()}></img>


            </div>

            <div className="container is-mobie">
                <div className="srollUp">
                    <img src={ScrollUp} alt="photos" onClick={() => onClickScroll()}></img>
                </div>

                <Link to="/">
                    <img className="logo" src={Logo} alt="photos"></img>
                </Link>

                <div className="title">
                    {/* <p>ABOUT</p> */}
                    <p>CONTACT US</p>
                    {/* <p>FOLLOW US</p> */}
                </div>


                <div className="group1">
                    <p>
                        <a href='https://www.instagram.com/demole.io' target="_blank" rel="noreferrer">
                            <img src={IconIg} alt="photos"></img>
                        </a>
                    </p>

                    <p>
                        <a href='https://www.facebook.com/Demoleio-701276920706670' target="_blank" rel="noreferrer">
                            <img src={IconFb} alt="photos"></img>
                        </a>
                    </p>


                    <p>
                        <a href='https://twitter.com/demoleio' target="_blank" rel="noreferrer">
                            <img src={TweetIcon} alt="photos"></img>
                        </a>
                    </p>

                    <p>
                        <a href='https://www.reddit.com/user/Demole_io' target="_blank" rel="noreferrer">
                            <img src={IconReddit} alt="photos"></img>
                        </a>
                    </p>

                    <p>
                        <a href='https://discord.gg/NZJBZ9xH8M' target="_blank" rel="noreferrer">
                            <img src={IconDiscord} alt="photos"></img>
                        </a>
                    </p>

                    <p>
                        <a href='https://t.me/Demoleio' target="_blank" rel="noreferrer">
                            <img src={IconTele} alt="photos"></img>
                        </a>
                    </p>

                    <p>
                        <a href='https://t.me/Demole_ioCommunity' target="_blank" rel="noreferrer">
                            <img src={IconTele} alt="photos"></img>
                        </a>
                    </p>
                </div>

                <p>Email: business@demole.io</p>
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
