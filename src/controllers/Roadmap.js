import React, { Fragment, useState } from 'react'
import img3 from '../assets/img/Mask Group2.jpg'
import img9 from '../assets/img/pasted image 0.jpg'
import img10 from '../assets/img/pasted image 1.jpg'
import img11 from '../assets/img/pasted image 2.jpg'
import img from '../assets/img/image3.png'
import ArowerRight from '../assets/img/roadmap5.png'

import Line from '../assets/img/Rectangle 11.png'
import LineDung from '../assets/img/Rectangle 11 copy 2.png'
import BtnChan from '../assets/img/button1.png'
import BtnLe from '../assets/img/button2.png'

export default function Roadmap() {
    const [data] = useState([
        {
            img: img3,
            title: "QIII",
            year: "2021",
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
            title: "QIV",
            year: "2021",
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
            title: "QI",
            year: "2022",
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
            title: "QII",
            year: "2022",
            content: [
                "Tournament",
            ],
            imgMobile: img
        },
    ])

    const renderData = (value, index) => {
        return (
            <Fragment key={index}>
                {(index % 2 === 1) && <div className="child child-le" key={index}>
                    <div className="wraper-title" style={{ backgroundImage: `url(${BtnLe})` }}>
                        <p className="index">{index + 1}</p>
                        <p className="titlee">{value.title} <span>{value.year}</span></p>
                    </div>

                    <div className="wraper-content">
                        <img src={LineDung} alt="photos"></img>
                        <ul>
                            {value.content.map((valuee, indexx) => {
                                return <li key={indexx}>- {valuee}</li>
                            })}
                        </ul>
                    </div>
                </div>}

                {(index % 2 === 0) && <div className="child child-chan" key={index}>
                    <div className="wraper-content">
                        <img src={LineDung} alt="photos"></img>
                        <ul>
                            {value.content.map((valuee, indexx) => {
                                return <li key={indexx}>- {valuee}</li>
                            })}
                        </ul>
                    </div>
                    <div className="wraper-title" style={{ backgroundImage: `url(${BtnChan})` }}>
                        <p className="index">{index + 1}</p>
                        <p className="titlee">{value.title} <span>{value.year}</span></p>
                    </div>
                </div>}
            </Fragment>
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
                    <div className="wrapper-data">
                        <img className="line" src={Line} alt="photos"></img>
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
