import React, { useState } from 'react'
import img1 from '../assets/img/Mask Group.png'
import img2 from '../assets/img/Mask Group1.png'
import img3 from '../assets/img/Mask Group2.png'
import img4 from '../assets/img/Frame 86.png'
import img from '../assets/img/image3.png'
import Line from '../assets/img/Group 8092.png'
import LineMobile from '../assets/img/Group 8104.png'
export default function Roadmap() {
    const [data, setdata] = useState([
        {
            img: img1,
            title: "OCTOBER",
            date: '15-20',
            content: [
                "Core gameplay",
                "Core gameplay",
                "Core gameplay",
                "Core gameplay"
            ],
            imgMobile: img

        },
        {
            img: img2,
            title: "OCTOBER",
            date: '14-19',
            content: [
                "Core gameplay",
                "Core gameplay",
                "Core gameplay",
                "Core gameplay"
            ],
            imgMobile: img

        },
        {
            img: img3,
            title: "OCTOBER",
            date: '2020',
            content: [
                "Core gameplay",
                "Core gameplay",
                "Core gameplay",
                "Core gameplay"
            ],
            imgMobile: img

        },
        {
            img: img4,
            title: "OCTOBER",
            date: '2020',
            content: [
                "Core gameplay",
                "Core gameplay",
                "Core gameplay",
                "Core gameplay"
            ],
            imgMobile: img

        }
    ])

    const renderData = (value) => {
        return (
            <div className="child">
                <div className="color"></div>
                <img src={value.img} alt="photos"></img>
                <div className="waper-txt">
                    <p className="titlee">{value.title}</p>
                    <p className="date">{value.date}</p>
                    <ul>
                        {value.content.map((valuee, indexx) => {
                            return <li>{valuee}</li>
                        })}
                    </ul>

                </div>

            </div>
        )
    }

    const renderDataMobile = (value, index) => {
        return (
            <div className="child" style={{marginTop: `${index % 2 !== 0 ? index * 30  : index * 20}px`}}>
                <div className="color"></div>
                <div className="group1" style={{backgroundImage: `url(${value.imgMobile})`}}>
                    <p className="date">{value.date}</p>
                    <p className="titlee">{value.title}</p>
                </div>
                <ul>
                    {value.content.map((valuee, indexx) => {
                        return <li>{valuee}</li>
                    })}
                </ul>

            </div>
        )
    }


    return (
        <div id="roadmap">
            <div className="container">
                <p className="title">Roadmap</p>
                <p className="txt hmm">This timeline details our funding and development goals</p>

                <div className="content">
                    <img className="line" src={Line} alt="photos"></img>
                    <div className="waper-data">
                        {data.map((value, index) => {
                            return renderData(value)
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

                <p className="txt">This timeline details our funding and development goals</p>
            </div>

        </div>
    )
}
