import React, { useState } from "react";
import ArrowLeft from '../assets/img/Frame1.png'
import ArrowRight from '../assets/img/Frame.png'
import img1 from '../assets/img/Mask Group7.png'
import img2 from '../assets/img/Group 8093.png'
import img3 from '../assets/img/Mask Group9.png'

export default function Features() {
    const [data, setdata] = useState([
        { img: img1 },
        { img: img2 },
        { img: img3 },
    ])

    const [selectedIndex, setSelectedIndex] = useState(0)

    const onClickLeft = () => {
        const nextIndex = selectedIndex === 0 ? data.length - 1 : selectedIndex - 1;
        setSelectedIndex(nextIndex);
    }

    const onClickRight = () => {
        const nextIndex = selectedIndex === (data.length - 1) ? 0 : selectedIndex + 1;
        setSelectedIndex(nextIndex);
    }

    const renderData = () => {
        return (
            <div className="slider-card">
                <img className="arrow" src={ArrowLeft} alt="photos" onClick={() => onClickLeft()}></img>

                <div className="items-center">
                    <section
                        id="slider"
                        className="w-16 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0"
                    >
                        <input
                            type="radio"
                            name="slider"
                            id="s1"
                            checked={selectedIndex === 0}
                        />
                        <input
                            type="radio"
                            name="slider"
                            id="s2"
                            checked={selectedIndex === 1}
                        />
                        <input
                            type="radio"
                            name="slider"
                            id="s3"
                            checked={selectedIndex === 2}
                        />



                        <label htmlFor="s1" id="slide1">
                            <img src={data[0].img} alt="photos"></img>
                        </label>
                        <label htmlFor="s2" id="slide2">
                            <img src={data[1].img} alt="photos"></img>
                        </label>
                        <label htmlFor="s3" id="slide3">
                            <img src={data[2].img} alt="photos"></img>
                        </label>
                    </section>
                </div>
                <img className="arrow" src={ArrowRight} alt="photos" onClick={() => onClickRight()}></img>
            </div>
        )
    }

    return (
        <div id="features">
            <div className="container">
                <p className="title">special features</p>

                {renderData()}

                <p className="txt">Faraland are exquisitely digital collectibles created using blockchain technology. Each collectible is matchless, genuine and varies in rarity. Faraland Universe has a lot of different races like human, orc, angel, demon, dragonborn, elf and fairy which are waiting for the user to discover.
                    Last but not least, Faraland is also a multiplayer RPG NFT GAME that lets user engaging in the combat arena and profit from battles</p>
            </div>

        </div>

    )
}
