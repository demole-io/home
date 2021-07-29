import React, { useState, useRef, useEffect } from "react";
import ArrowLeft from '../assets/img/Frame1.png'
import ArrowRight from '../assets/img/Frame.png'
import img1 from '../assets/img/bn6.png'
import img2 from '../assets/img/bn7.png'
import img3 from '../assets/img/bn8.png'
import img4 from '../assets/img/bn9.png'
import img5 from '../assets/img/bn10.png'
import img6 from '../assets/img/bn11.png'
import img7 from '../assets/img/bn12.png'

import img8 from '../assets/img/Method Draw Image (1).png'
import img9 from '../assets/img/Method Draw Image (4).png'
import img10 from '../assets/img/Method Draw Image (7).png'

export default function Features() {
    const [didMount, setDidMount] = useState(false)
    const [data, setdata] = useState([
        {
            img: img1,
        },
        {
            img: img2,
        },
        {
            img: img3,
        },
        {
            img: img4,
        },
        {
            img: img5,
        },
        {
            img: img6,
        },
        {
            img: img7,
        },
        {
            img: img8,
        },
        {
            img: img9,
        },
        {
            img: img10,
        },
    ])

    const [dataa, setdataa] = useState([
        {
            img: img5,
            content: {
                title: 'Play it your way',
                des: 'Immerse yourself in an engaging world of monsters with endless content and quests to explore. OR Just spend 10 minutes a day to prepare your squad and your monsters will battle for you automatically.'
            }
        },
        {
            img: img6,
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
    const [indexx, setindexx] = useState(0)
    const [interval, setinterval] = useState(false)

    useEffect(() => {
        if (didMount) {
            console.log("Did Update");
        } else {
            setDidMount(true);
            console.log("Did mount");

            autoNext()
        }
    });

    const autoNext = () => {
        setinterval(
            setInterval(() => {
                selectedIndex.current = selectedIndex.current === data.length - 1 ? 0 : selectedIndex.current + 1;
                setindexx(selectedIndex.current)
            }, 3000)
        )
    }

    const stopNext = () => {
        clearInterval(interval)
        setinterval(false)
    }

    const onClickLeft = () => {

        if (interval) {
            stopNext()
        }
        selectedIndex.current = selectedIndex.current === 0 ? data.length - 1 : selectedIndex.current - 1;
        setindexx(selectedIndex.current)
    }

    const onClickRight = () => {
        if (interval) {
            stopNext()
        }

        selectedIndex.current = selectedIndex.current === data.length - 1 ? 0 : selectedIndex.current + 1;
        setindexx(selectedIndex.current)
    }

    const renderData = () => {
        return (
            <div className="wraper-cover">
                <div className="slider-card">
                    <div className="txt">
                        <p>Fully Playable 3D Animation</p>
                        <span>Enjoy amazing monster design and dazzling skill animations in battle!</span>
                    </div>
                    <img className="imgg" src={data[selectedIndex.current].img} alt="photos"></img>
                </div>

                <div className="wraper-hinhtron">
                    {data.map((value, index) => {
                        return (
                            <div className={`hinhtron ${selectedIndex.current === index ? 'selectedd' : ''}`}>

                            </div>
                        )
                    })}
                </div>


            </div>

        )
    }

    const renderChild = (value, index) => {
        if (index % 2 === 0) {
            return (
                <div className="wraper-child">
                    <img src={value.img} alt="photos"></img>

                    <div>
                        <p>{value.content.title}</p>
                        <span>{value.content.des}</span>
                    </div>
                </div>
            )
        } else {
            return (
                <div  className="wraper-child">
                    <div>
                        <p>{value.content.title}</p>
                        <span>{value.content.des}</span>
                    </div>

                    <img src={value.img} alt="photos"></img>
                </div>
            )
        }

    }

    const renderDataa = () => {
        return (
            <div className="wraper-content">
                {dataa.map((value, index) => {
                    return renderChild(value, index)
                })}
            </div>
        )
    }

    return (
        <div id="features">
            <div className="container">
                <div className="waper-title">
                    <p className="title">Game Features</p>
                    <p className="big-title">Game Features</p>
                </div>

                {renderData()}

                {renderDataa()}

                {/* <div className="content">
                    <p className="upcase">{data[selectedIndex.current].content.title}</p>
                    <p>{data[selectedIndex.current].content.des}</p>


                </div> */}
            </div>

        </div>

    )
}
