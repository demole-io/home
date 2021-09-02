import React, { useState } from "react";
import IconMobile from '../assets/img/icon-mobile.svg'
import IconClose from '../assets/img/icon-close.svg'
import Logo from '../assets/img/DEMOLE-logo02 1.png'
import Market from '../assets/img/map_grocery-or-supermarket.png'
import Stake from '../assets/img/ant-design_dollar-circle-filled.png'
import Summon from '../assets/img/raphael_opensource.png'
import Faq from '../assets/img/akar-icons_question-fill.png'
import Team from '../assets/img/team.svg'
import Commun from '../assets/img/fluent_people-community-20-filled.png'
import { Link } from "react-router-dom";

import TweetIcon from '../assets/img/Group.png'
import IconFb from '../assets/img/Group 8105.png'
import IconIg from '../assets/img/Group 8107.png'
import IconReddit from '../assets/img/reddit.png'
import IconDiscord from '../assets/img/discord.png'
import IconTele from '../assets/img/telegram.png'
import IconBook from '../assets/img/book.png'

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const onClickToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    }


    return (
        <div className={`header`}>
            <div className="container">
                <img src={toggleMenu ? IconClose : IconMobile} className="icon-mobile" alt="photos" onClick={onClickToggleMenu}></img>
                {toggleMenu && <div className="ovelay-mobile"></div>}
                <Link to="/">
                    <img className="logo" src={Logo} alt="photos"></img>
                </Link>

                <div className="right">
                    <ul className={`menu ${toggleMenu ? 'is-toggle' : ''}`}>
                        {/* <Link to="/summon">{toggleMenu && <img src={Summon} alt="photos"></img>} Summon</Link>
                        <Link to="/marketplace">{toggleMenu && <img src={Market} alt="photos"></img>} Marketplace</Link> */}
                        <Link to="/summon">{toggleMenu && <img src={Summon} alt="photos"></img>} Summon</Link>

                        {/* <Link to="/faq"><a href="/faq">{toggleMenu && <img src={Faq} alt="photos"></img>} FAQ</a></Link> */}
                        <li className="tip">{toggleMenu && <img src={Market} alt="photos"></img>} Marketplace<span>Coming Soon</span></li>
                        <li className="tip">{toggleMenu && <img src={Stake} alt="photos"></img>} Stake<span>Coming Soon</span></li>
                        <a href="/Demole_PitchDeck.pdf" target="_blank" rel="noopener noreferrer">{toggleMenu && <img src={IconBook} alt="photos"></img>}Pitch Deck</a>
                        <li className="tip">{toggleMenu && <img src={Faq} alt="photos"></img>} Demole-Wiki<span>Coming Soon</span></li>
                        <Link to="/our-team">{toggleMenu && <img src={Team} alt="photos" width="24" fill="white"></img>} Our Team</Link>
                        <div className="playnow">
                            <li className="tip">{toggleMenu && <img src={Commun} alt="photos"></img>} PLAY NOW<span>Coming Soon</span></li>
                        </div>

                        <div className="group1-mobile">
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
                                <a href='https://discord.com/channels/870208368743153725/870208369347153971' target="_blank" rel="noreferrer">
                                    <img src={IconDiscord} alt="photos"></img>
                                </a>
                            </p>

                            <p>
                                <a href='https://t.me/demole_io' target="_blank" rel="noreferrer">
                                    <img src={IconTele} alt="photos"></img>
                                </a>
                            </p>

                            <p>
                                <a href='https://t.me/Demole_ioCommunity' target="_blank" rel="noreferrer">
                                    <img src={IconTele} alt="photos"></img>
                                </a>
                            </p>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}
