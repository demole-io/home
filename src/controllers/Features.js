import React, { useState, useRef, useEffect } from "react";
import img1 from '../assets/img/f1.jpg'
import img2 from '../assets/img/f2.jpg'
import img3 from '../assets/img/f3.jpg'
import img4 from '../assets/img/f4.jpg'
import khung from '../assets/img/khung.png'
import khungMobile from '../assets/img/khungmobile.png'
import Vector from '../assets/img/Group 8120.png'
import $ from 'jquery'

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

    const selectedIndex = useRef(0)
    const [index, setindex] = useState(0)
    const interval = useRef(null)

    const handleScroll = () => {
        const pageFeatures = document.querySelector("#features")
        $('#features .container .wraper-content .wraper-child div span').addClass('text-move-top')

        if (pageFeatures.getBoundingClientRect().top > 0) {
            $('#features .container .wraper-content .wraper-child div span').removeClass('text-move-top')
        }
        //BOTTOM
        if (pageFeatures.getBoundingClientRect().bottom <= 0) {
            $('#features .container .wraper-content .wraper-child div span').removeClass('text-move-top')
        }
    }

    useEffect(() => {
        interval.current = setInterval(() => {
            selectedIndex.current = selectedIndex.current === dataa.length - 1 ? 0 : selectedIndex.current + 1;
            setindex(selectedIndex.current)
        }, 3000)

        window.addEventListener('scroll', handleScroll);

        return () => {
            if (interval.current) clearInterval(interval.current)

            window.removeEventListener('scroll', handleScroll);
            $('#features .container .wraper-content .wraper-child div span').removeClass('text-move-top')
        }
    }, [dataa]);

    const onClickHinhTron = (indexx) => {
        if (interval.current) clearInterval(interval.current)
        selectedIndex.current = indexx;
        setindex(selectedIndex.current)
    }

    const renderData = () => {
        return (
            <div className="wraper-cover">
                 <p className="titlee">{dataa[index].content.title}</p>
                <div className="slider-card">
                    <img className="imgg" src={dataa[index].img} alt="photos"></img>

                    <div className="wraper-khung">
                        <img className="khung" src={props.isMobile ? khungMobile : khung} alt="photos"></img>
                        <div className="wraper-info">
                            <p>{dataa[index].content.title}</p>
                            <div>
                                <img src={Vector} alt="photos"></img>
                            </div>
                           {index === 1 && <span>Immerse yourself in an engaging world of monsters with endless content and quests to explore.<br></br> OR Just spend 10 minutes a day to prepare your squad and your monsters will battle for you automatically.</span>}
                           {index !== 1 && <span>{dataa[index].content.des}</span>}
                        </div>
                    </div>
                </div>

                <div className="wraper-hinhtron">
                    {dataa.map((value, key) => {
                        return (
                            <div key={key} className={`hinhtron ${index === key ? 'selectedd' : ''}`} onClick={() => onClickHinhTron(key)}>
                            </div>
                        )
                    })}
                </div>
            </div>

        )
    }
    return (
        <div id="features">
            <div className="container">
                {renderData()}
            </div>

        </div>

    )
}

export default Features
