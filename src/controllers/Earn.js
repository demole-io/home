import React, { useState, useEffect } from 'react'
import Training from '../assets/img/1@4x.png'
import Arena from '../assets/img/2@4x.png'
import Daily from '../assets/img/3@4x.png'
import Upgrade from '../assets/img/4@4x.png'
import World from '../assets/img/5@4x.png'
import $ from 'jquery'

export default function Earn() {

    const [data, setdata] = useState([
        {
            title: 'Training ground',
            content: 'Let your monsters practice at the training ground to increase their level and receive $DML tokens even if you are not online.',
            img: Training
        },
        {
            title: 'Daily quests',
            content: 'Complete daily missions for rewards',
            img: Daily
        },
        {
            title: 'Arena',
            content: 'Accompanying players around the world to defeat the world Boss and receive valuable rewards',
            img: Arena
        },
        {
            title: 'World Bosses',
            content: 'Accompanying players around the world to defeat the world Boss and receive valuable rewards ',
            img: World
        },
        {
            title: 'Upgrade monsters',
            content: 'Find unique monsters and items and exchange with other players.',
            img: Upgrade
        },
    ])

    useEffect(() => {
        console.log("Did mount");

        jumpp()
        var interver = setInterval(() => {
            jumpp()
        }, 10 * 1000)

        return () => {
            clearInterval(interver)
        }
    }, []);

    const jumpp = () => {
        console.log("JUMP===")
        for (let i = 0; i < data.length; i++) {
            setTimeout(() => {
                $(`.img-earn-${i}`).addClass("jump")
                setTimeout(() => {
                    $(`.img-earn-${i}`).removeClass("jump")
                }, 3000);
            }, (i + 1) * 2000);

        }
    }

    const renderChild = (value, index) => {
        return (
            <div className="child">
                <img className={`img-earn-${index}`} src={value.img} alt="photos"
                ></img>
                <p className="titlee">{value.title}</p>
                <p className="contentt">{value.content}</p>
            </div>
        )
    }

    return (
        <div id="earn">
            <div className="container">
                <div className="waper-title">
                    <p className="title">Play to earn</p>
                    <p className="big-title">Play to earn</p>
                </div>
                <p className='txt'>Why invest huge amounts of money in the game when you can make money from it?
                    <br></br>
                    Each and every activity in the game is a great source of real-life rewards awaiting for you to explore</p>
                <div className="waper-content">
                    {data.map((value, index) => {
                        return renderChild(value, index)
                    })}
                </div>
            </div>
        </div>
    )
}
