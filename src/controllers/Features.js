import React, { useState, useRef, useEffect } from "react";
import ArrowLeft from '../assets/img/Frame1.png'
import ArrowRight from '../assets/img/Frame.png'
import img1 from '../assets/img/bn6.png'
import img2 from '../assets/img/bn7.png'
import img3 from '../assets/img/bn8.png'
import img4 from '../assets/img/bn9.png'
import img5 from '../assets/img/bn10.png'
import img6 from '../assets/img/bn11.png'

export default function Features() {
    const [didMount, setDidMount] = useState(false)
    const [data, setdata] = useState([
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
                des: 'Immerse yourself in an engaging world of monsters with endless content and quests to explore. OR Just spend 10 minutes a day to prepare your squad and your monsters will battle for you automatically.'
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
        {
            img: img5,
            content: {
                title: 'Fully Playable 3D Animation',
                des: 'Enjoy amazing monster design and dazzling skill animations in battle!'
            }
        },
        {
            img: img6,
            content: {
                title: 'Fully Playable 3D Animation',
                des: 'Enjoy amazing monster design and dazzling skill animations in battle!'
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
            }, 1000)
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
            <div className="slider-card">

                <img className="arrow" src={ArrowLeft} alt="photos" onClick={() => onClickLeft()}></img>


                <img className="imgg" src={data[selectedIndex.current].img} alt="photos"></img>
                {/* <div className="items-center">
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
               
                */}

                <img className="arrow" src={ArrowRight} alt="photos" onClick={() => onClickRight()}></img>
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

                <div className="content">
                    <p className="upcase">{data[selectedIndex.current].content.title}</p>
                    <p>{data[selectedIndex.current].content.des}</p>

                  
                </div>
            </div>

        </div>

    )
}
