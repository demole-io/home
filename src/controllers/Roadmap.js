import React, { useState } from 'react'
import img3 from '../assets/img/Mask Group2.jpg'
import img9 from '../assets/img/pasted image 0.jpg'
import img10 from '../assets/img/pasted image 1.jpg'
import img11 from '../assets/img/pasted image 2.jpg'
import img12 from '../assets/img/pasted image 3.jpg'

import img from '../assets/img/image3.png'
import Line from '../assets/img/Group 8092.png'
import LineMobile from '../assets/img/Group 8122.png'

import khungTitle from '../assets/img/roadmap1.png'
import ArrowUp from '../assets/img/roadmap3.png'
import ArrowDown from '../assets/img/roadmap2.png'
import hmm from '../assets/img/roadmap4.png'

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
            <div className="child">
                {(index % 2 === 1) && <div className="child-le" key={index}>

                    <div className="wraper-title">
                        <p className="titlee">{value.title}</p>
                    </div>

                    <div className="wraper-content">
                        <img src={ArrowDown} alt="photos"></img>
                        <ul>
                            {value.content.map((valuee, indexx) => {
                                return <li key={indexx}>{valuee}</li>
                            })}
                        </ul>
                    </div>
                </div>}

                {(index % 2 === 0) && <div className="child-chan" key={index}>
                    <div className="wraper-content">
                        <img src={ArrowUp} alt="photos"></img>
                        <ul>
                            {value.content.map((valuee, indexx) => {
                                return <li key={indexx}>{valuee}</li>
                            })}
                        </ul>
                    </div>
                    <div className="wraper-title">
                        <p className="titlee">{value.title}</p>
                    </div>
                </div>}

                {(index !== data.length - 1) && <img className="line" src={hmm} alt="photos"></img>}
            </div>

        )
    }

    const renderDataMobile = (value, index) => {
        return (
            <div className="child" style={{ marginTop: `${index % 2 !== 0 ? 40 : 10}px` }} key={index}>
                <div className="color"></div>
                <div className="group1" style={{ backgroundImage: `url(${value.imgMobile})` }}>
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
                <p className="title">roadmap</p>
                <div className="content">
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
