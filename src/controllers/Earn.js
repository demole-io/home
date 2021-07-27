import React, { useState, useEffect } from 'react'
import Training from '../assets/img/1@4x.png'
import Arena from '../assets/img/2@4x.png'
import Daily from '../assets/img/3@4x.png'
import Upgrade from '../assets/img/4@4x.png'
import World from '../assets/img/5@4x.png'
import $ from 'jquery'

export default function Earn() {
    const [didMount, setDidMount] = useState(false)

    const [data, setdata] = useState([
        {
            title: 'Training ground',
            content: 'Let your monsters practice at the training ground to increase their level and receive $DML tokens even if you are not online.',
            img: Training
        },
        {
            title: 'Arena',
            content: 'Complete daily missions for rewards',
            img: Arena
        },
        {
            title: 'Daily quests',
            content: 'Accompanying players around the world to defeat the world Boss and receive valuable rewards',
            img: Daily
        },
        {
            title: 'Upgrade your monsters',
            content: 'Accompanying players around the world to defeat the world Boss and receive valuable rewards',
            img: Upgrade
        },
        {
            title: 'World Bosses',
            content: 'Find unique monsters and items and exchange with other players.',
            img: World
        },
    ])

    useEffect(() => {
        if (didMount) {
            console.log("Did Update");
        } else {
            setDidMount(true);
            console.log("Did mount");

            setInterval(() => {
                $(".img-earn").css({
                    opacity: 0,
                    transition: "opacity 0.5s",
                })

                setTimeout(() => {
                    $(".img-earn").css({
                        opacity: 1,
                        transition: "opacity 0.5s",
                    })
                }, 1000);
            }, 3000);
        }
    });

    const renderChild = (value) => {
        return (
            <div className="child">
                <img className='img-earn' src={value.img} alt="photos"></img>
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
                <p className='txt'>This timeline details our funding and development goals</p>
                <div className="waper-content">
                    {data.map((value, index) => {
                        return renderChild(value)
                    })}
                </div>
            </div>
        </div>
    )
}
