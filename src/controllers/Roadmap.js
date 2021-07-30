import React, { useState } from 'react'
import img3 from '../assets/img/Mask Group2.jpg'
import img9 from '../assets/img/pasted image 0.jpg'
import img10 from '../assets/img/pasted image 1.jpg'
import img11 from '../assets/img/pasted image 2.jpg'
import img12 from '../assets/img/pasted image 3.jpg'

import img from '../assets/img/image3.png'
import Line from '../assets/img/Group 8092.png'
import LineMobile from '../assets/img/Group 8104.png'
export default function Roadmap() {
    const [data] = useState([
        {
            img: img3,
            title: "QII/2021",
            content: [
                "Character design/ NFT system",
                "Monster system ( stat/skill/graphic v.v.. )",
            ],
            imgMobile: img

        },
        {
            img: img9,
            title: " QIII/2021",
            content: [
                "Monster summon",
                "Marketplace",
                "Training ground / Staking",
                "LP adding",
                "World Boss",
                "Social features: Chatting, Line-up visiting",
                "Arena",
                "Mobile (Android/IOS)"
            ],
            imgMobile: img

        },
        {
            img: img10,
            title: "QIV/2021",
            content: [
                "Auction",
                "Monster upgrading system",
                "Campaign/Story",
                "Boosters"
            ],
            imgMobile: img
        },
        {
            img: img11,
            title: "QI/2022",
            content: [
                "Pet system",
                "More in-game activities: Darkness Maze, Olympus tower,...",
                "More social features: Team up, Guild",
            ],
            imgMobile: img
        },
        {
            img: img12,
            title: "QII/2022",
            content: [
                "Item crafting system",
                "More in-game activities",
                "DAO Voting",
            ],
            imgMobile: img
        }
    ])

    const renderData = (value, index) => {
        return (
            <div className="child" key={index}>
                <div className="color"></div>
                <img src={value.img} alt="photos"></img>
                <div className="waper-txt">
                    <p className="titlee">{value.title}</p>
                    <ul>
                        {value.content.map((valuee, indexx) => {
                            return <li key={indexx}>{valuee}</li>
                        })}
                    </ul>

                </div>

            </div>
        )
    }

    const renderDataMobile = (value, index) => {
        return (
            <div className="child" style={{marginTop: `${index % 2 !== 0 ? 40  : 10}px`}} key={index}>
                <div className="color"></div>
                <div className="group1" style={{backgroundImage: `url(${value.imgMobile})`}}>
                    <p className="titlee">{value.title}</p>
                </div>
                <ul>
                    {value.content.map((valuee, indexx) => {
                        return <li key={indexx}>{valuee}</li>
                    })}
                </ul>

            </div>
        )
    }


    return (
        <div id="roadmap">
            <div className="container">
            <div className="waper-title">
                    <p className="title">Roadmap</p>
                    <p className="big-title">Roadmap</p>
                </div>
                <div className="content">
                    <img className="line" src={Line} alt="photos"></img>
                    <div className="waper-data">
                        {data.map((value, index) => {
                            return renderData(value, index)
                        })}
                    </div>
                </div>

                <div className="content-mobile">
                    <div className="waper-data">
                        {data.map((value, index) => {
                            return renderDataMobile(value, index)
                        })}
                    </div>
                    <img className="line" src={LineMobile} alt="photos"></img>
                </div>
            </div>

        </div>
    )
}
