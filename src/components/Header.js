import React, { useState } from "react";
import IconMobile from '../assets/img/icon-mobile.svg'
import IconClose from '../assets/img/icon-close.svg'
import Logo from '../assets/img/DEMOLE-logo02 1.png'
import Market from '../assets/img/map_grocery-or-supermarket.png'
import Stake from '../assets/img/ant-design_dollar-circle-filled.png'
import Summon from '../assets/img/raphael_opensource.png'
import Faq from '../assets/img/akar-icons_question-fill.png'
import Commun from '../assets/img/fluent_people-community-20-filled.png'

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
                <a className="waper-logo" href='/'>
                    <img src={Logo} alt="photos"></img>
                </a>

                <div className="right">
                    <ul className={`menu ${toggleMenu ? 'is-toggle' : ''}`}>
                        <a href="/marketplace" target="_blank" rel="noopener noreferrer"> {toggleMenu && <img src={Market} alt="photos"></img>} Marketplace</a>
                        <li title="Comming Soon"> {toggleMenu && <img src={Stake} alt="photos"></img>} Stake</li>
                        <a href='/summon' target="_blank" rel="noopener noreferrer">{toggleMenu && <img src={Summon} alt="photos"></img>} Summon</a>
                        <a href="/faq" target="_blank" rel="noopener noreferrer">{toggleMenu && <img src={Faq} alt="photos"></img>} FAQ</a>
                        <li title="Comming Soon">{toggleMenu && <img src={Commun} alt="photos"></img>} Community</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
