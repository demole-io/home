import React, { useState } from "react";
import IconMobile from '../assets/img/icon-mobile.svg'
import IconClose from '../assets/img/icon-close.svg'
import Logo from '../assets/img/DEMOLE-logo02 1.png'
import Market from '../assets/img/map_grocery-or-supermarket.png'
import Stake from '../assets/img/ant-design_dollar-circle-filled.png'
import Summon from '../assets/img/raphael_opensource.png'
import Faq from '../assets/img/akar-icons_question-fill.png'
import Commun from '../assets/img/fluent_people-community-20-filled.png'
import { Link } from "react-router-dom";

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
                <Link to="/"><a className="waper-logo" href='/'>
                    <img src={Logo} alt="photos"></img>
                </a></Link>

                <div className="right">
                    <ul className={`menu ${toggleMenu ? 'is-toggle' : ''}`}>
                        <Link to="/marketplace"><a href="/marketplace"> {toggleMenu && <img src={Market} alt="photos"></img>} Marketplace</a></Link>
                        <li title="Comming Soon"> {toggleMenu && <img src={Stake} alt="photos"></img>} Stake</li>
                        <Link to="/summon"><a href='/summon'>{toggleMenu && <img src={Summon} alt="photos"></img>} Summon</a></Link>
                        <Link to="/faq"><a href="/faq">{toggleMenu && <img src={Faq} alt="photos"></img>} FAQ</a></Link>
                        <li title="Comming Soon">{toggleMenu && <img src={Commun} alt="photos"></img>} Community</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
