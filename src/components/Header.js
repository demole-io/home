import React, { useState } from "react";
import IconMobile from '../assets/img/icon-mobile.svg'
import IconClose from '../assets/img/icon-close.svg'
import Logo from '../assets/img/Asset 26@4x 1.png'
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
                    <img src={Logo} alt="photos" style={{ width: '50px', height: '50px' }}></img>
                    <p>demole</p>
                </a>

                <div className="right">
                    <ul className={`menu ${toggleMenu ? 'is-toggle' : ''}`}>
                        <a href='/'> {toggleMenu && <img src={Market} alt="photos"></img>} Marketplace</a>
                        <a href='/'> {toggleMenu && <img src={Stake} alt="photos"></img>} Stake</a>
                        <a href='/'>{toggleMenu && <img src={Summon} alt="photos"></img>} Summon</a>
                        <a href='/'>{toggleMenu && <img src={Faq} alt="photos"></img>} FAQ</a>
                        <a href='/'>{toggleMenu && <img src={Commun} alt="photos"></img>} Community</a>
                    </ul>
                </div>
            </div>
        </div>
    )
}
