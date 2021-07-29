import React from 'react'
import Header from '../components/Header'
import PayBtn from '../assets/img/fantastic-illustration-ancient-chinese-themes 3.png'
import Ques from '../assets/img/Ouf7Ajd 2.png'
import Dragon from '../assets/img/rong 2.png'
import Egg from '../assets/img/mockup 1.png'
import $ from 'jquery'

export default function Summon() {

    const reset = () => {
        $(".egg").css({
            opacity: 1,
            display: 'block'
        })

        $(".dragon").css({
            opacity: 0,
            display: 'none'
        })

    }

    const onClickPay = () => {

        reset()
        $(".egg").css({
            opacity: 0,
            transition: "opacity 2s",
        })

        setTimeout(() => {

            $(".egg").css({
                display: 'none'
            })

            $(".dragon").css({
                display: 'block',
            })
            setTimeout(() => {
                $(".dragon").css({
                    opacity: 1,
                    transition: "opacity 2s",
                })
            }, 1000);
        }, 1000);
    }

    return (
        <div id="summon">
            <Header></Header>
            <div className="container">
                <div className="waper">
                    <div className="group1">
                        <img className="egg" src={Egg} alt="photos"></img>
                        <img className="dragon" src={Dragon} alt="photos"></img>
                    </div>

                    <div className="group2">
                        <img src={PayBtn} alt="photos" onClick={onClickPay}></img>
                        <img src={Ques} alt="photos" className="ques"></img>
                    </div>

                </div>

            </div>

        </div>
    )
}
