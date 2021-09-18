import React, { useState } from 'react'
import img3 from '../assets/img/Mask Group2.jpg'
import img9 from '../assets/img/pasted image 0.jpg'
import img10 from '../assets/img/pasted image 1.jpg'
import img11 from '../assets/img/pasted image 2.jpg'
import img12 from '../assets/img/pasted image 3.jpg'
import img from '../assets/img/image3.png'
import ArrowUp from '../assets/img/roadmap3.png'
import ArrowDown from '../assets/img/roadmap2.png'
import hmm from '../assets/img/roadmap4.png'
import ArowerRight from '../assets/img/roadmap5.png'

export default function Roadmap() {
    const [data] = useState([
        {
            img: img3,
            title: "QIII/2021",
            content: [
                "Character design, NFT system",
                "Game design and testing",
                "Partnerships",
                "Fundraising"
            ],
            imgMobile: img

        },
        {
            img: img9,
            title: "QIV/2021",
            content: [
                "NFT Offerings",
                "TGE/Listing",
                "Marketplace",
                "Training ground, Monster Nest",
                "Game release: Campaign, World Boss, Arena",
            ],
            imgMobile: img

        },
        {
            img: img10,
            title: "QI/2022",
            content: [
                "Pet system",
                "Item system",
                "Booster system",
                "More social features",
            ],
            imgMobile: img
        },
        {
            img: img11,
            title: "QII/2022",
            content: [
                "Tournament",
            ],
            imgMobile: img
        },
        {
            img: img12,
            title: "QII/2022",
            content: [
                "Item crafting system",
                "DAO Voting",
            ],
            imgMobile: img
        }
    ])

    const renderData = (value, index) => {
        return (
            <div key={index} className="child">
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
            <div className="child" key={index}>
                <div className="group1">
                    <div className="wraper-title">
                        <p className="titlee">{value.title}</p>
                    </div>
                    <img src={ArowerRight} alt="photos"></img>
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
                </div>
            </div>

        </div>
    )
}
