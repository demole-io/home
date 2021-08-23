import React, { useState, useEffect } from 'react'
import Training from '../assets/img/1@4x.png'
import Arena from '../assets/img/2@4x.png'
import Daily from '../assets/img/3@4x.png'
import Upgrade from '../assets/img/4@4x.png'
import World from '../assets/img/5@4x.png'
import khung1 from '../assets/img/playtoearn5.png'
import khung2 from '../assets/img/playtoearn4.png'
import khung3 from '../assets/img/playtoearn.png'
import khung4 from '../assets/img/playtoearn2.png'
import khung5 from '../assets/img/playtoearn6.png'
import $ from 'jquery'
import Carousel from "../components/Carousel";

export default function Earn() {

    const [data] = useState([
        {
            title: 'Training ground',
            content: 'Let your monsters practice at the training ground to increase their level and receive $DML tokens even if you are not online.',
            img: Training,
            khung: khung1,
        },
        {
            title: 'Daily quests',
            content: 'Complete daily missions for rewards',
            img: Daily,
            khung: khung2,
        },
        {
            title: 'Arena',
            content: 'Compete with other players in the arena ranking for exclusive rewards',
            img: Arena,
            khung: khung3,
        },
        {
            title: 'World Bosses',
            content: 'Accompanying players around the world to defeat the world Boss and receive valuable rewards ',
            img: World,
            khung: khung4,
        },
        {
            title: 'Marketplace',
            content: 'Find unique monsters and items and exchange with other players.',
            img: Upgrade,
            khung: khung5,
        },
    ])

    useEffect(() => {
        var interver = setInterval(() => {
            for (let i = 0; i < data.length; i++) {
                setTimeout(() => {
                    $(`.img-earn-${i}`).addClass("jump")
                    // $(`.contentt-${i}`).addClass('text-zoom')
                    setTimeout(() => {
                        $(`.img-earn-${i}`).removeClass("jump")
                        // $(`.contentt-${i}`).removeClass('text-zoom')
                    }, 3000);
                }, (i + 1) * 2000);
            }
        }, 10 * 1000)


        return () => {
            clearInterval(interver)
        }
    }, [data]);

    const renderChild = (value, index) => {
        return (
            <div className="child gallery-cell" key={index} style={{ backgroundImage: `url(${value.khung})` }}>
                <p className="titlee">{value.title}</p>
                <div>
                    <img className={`img-earn-${index}`} src={value.img} alt="photos"></img>
                </div>
                <p className={`contentt contentt-${index}`}>{value.content}</p>
            </div>
        )
    }

    return (
        <div id="earn">
            <div className="container">
                <p className="title">play to earn</p>
                <div className="waper-content">
                    {data.map((value, index) => {
                        return renderChild(value, index)
                    })}
                </div>

                <div className="waper-content-mobile">
                    <Carousel centerMode={true} centerSlidePercentage={70}>
                        {data.map((value, index) => {
                            return renderChild(value, index)
                        })}
                    </Carousel>

                </div>
            </div>
        </div>
    )
}
