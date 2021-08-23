import React, { useState } from "react";
import img1 from '../assets/img/f1.png'
import img2 from '../assets/img/f2.png'
import img3 from '../assets/img/f3.png'
import img4 from '../assets/img/f4.png'
import khung from '../assets/img/khung.png'
import khungMobile from '../assets/img/khungmobile.png'
import Carousel from "../components/Carousel";

const Features = props => {
    const [dataa] = useState([
        {
            img: img1,
            content: {
                title: 'Fully Playable 3D Animation',
                des: 'Enjoy amazing monster design and dazzling skill animations in battle!'
            }
        },
        {
            img: img2,
            content: {
                title: 'Play it your way',
                des: `Immerse yourself in an engaging world of monsters with endless content and quests to explore. OR Just spend 10 minutes a day to prepare your squad and your monsters will battle for you automatically.`
            }
        },
        {
            img: img3,
            content: {
                title: 'Interact with players around the world',
                des: 'Collaborate with global players to defeat world bosses or compete with them on leaderboards. Make friends worldwide through Friends and Guild features'
            }
        },
        {
            img: img4,
            content: {
                title: 'Create and trade your own NFT',
                des: 'Powered by blockchain technology, your monsters and items are unique and tradable in the marketplace.'
            }
        },
    ])

    const renderChild = (key) => {
        return (
            <div key={key} className={`carousel-cell`}>
                <p className="titlee">{dataa[key].content.title}</p>

                <img className="carousel-cell-image" src={dataa[key].img} alt="photos"></img>

                <div className="wraper-khung">
                    <img className="khung" src={props.isMobile ? khungMobile : khung} alt="photos"></img>
                    <div className="wraper-info">
                        {key === 1 && <span>Immerse yourself in an engaging world of monsters with endless content and quests to explore.<br></br> OR Just spend 10 minutes a day to prepare your squad and your monsters will battle for you automatically.</span>}
                        {key !== 1 && <span>{dataa[key].content.des}</span>}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div id="features">
            <div className="container">
                <Carousel>
                    {dataa.map((value, index) => {
                        return renderChild(index)
                    })}
                </Carousel>
            </div>

        </div>

    )
}

export default Features
