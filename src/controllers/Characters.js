import React, { useState, useEffect, useRef } from 'react'
import ArrowLeft from '../assets/img/Frame1.png'
import ArrowRight from '../assets/img/Frame.png'
import Unknow1 from '../assets/img/Subtract.png'
import Knight from '../assets/img/ideal_Dargon.webm'
import ORC from '../assets/img/ideal_Orc.webm'
import WARRIOR from '../assets/img/TienNu.webm'
import MEMALD from '../assets/img/TienCa.webm'

import iconOrc from '../assets/img/nguoi_cay.png'
import iconMEMALD from '../assets/img/nguoi_ca.png'
import iconKnight from '../assets/img/rong.png'
import iconWARRIOR from '../assets/img/Group 8112.png'

import Unknow2 from '../assets/img/Subtract1.png'
import Cirke from '../assets/img/Ellipse 15.png'
import Unknow3 from '../assets/img/Frame 77.png'

const Characters = props => {
    const [didMount, setDidMount] = useState(false)
    const [data, setdata] = useState([
        {
            name: 'Treeman Tribe',
            icon: iconOrc,
            img: ORC,
            des: 'The murky old forests at the foot of the high cliffs in the northern part of the continent are inhabited by the Tree Tribe. Their territory is almost impregnable because of the murky darkness that is very scary. The inhabitants of the tribe were born from the trunks of thousands of years old trees, so their bodies were firm and soft, hazardous in team battles.'
        },
        {
            name: 'Merman Tribe',
            icon: iconMEMALD,
            img: MEMALD,
            des: 'Conquering the entire ocean, the Mermen have long harbored ambitions to dominate the continent. Mastering the vast sea, the Mermaids are especially strong in underwater battles. They regularly sent troops by the rivers to raid Middle-earth and infiltrate the mazes to loot resources.'
        },
        {
            name: 'Dragon Tribe',
            icon: iconKnight,
            img: Knight,
            des: 'Living in the caves on the high cliffs of the northern continent, the Dragon tribe is a mighty tribe with wings spread in the sky, a muscular body, and sharp claws. Dragons also have hard scales like armor to protect the body. With the advantage of flying high, the dragon tribe proved to be dominant in single hunting.'
        },
        {
            name: 'Angel Tribe',
            icon: iconWARRIOR,
            img: WARRIOR,
            des: 'The remote Arctic place covered by snow all year round is the home of the Angel tribe. They were born from holy souls. When they grow up, the members of the Angel Tribe spread out everywhere, linking up with many different tribes to help them fight. The Angel Tribe is famous as a tribe that has no enemies.'
        }
    ])

    const selected = useRef(0)
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
    }, []);

    const autoNext = () => {
        setinterval(
            setInterval(() => {
                selected.current = selected.current === data.length - 1 ? 0 : selected.current + 1;
                setindexx(selected.current)
            }, 2000)
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
        selected.current = selected.current === 0 ? data.length - 1 : selected.current - 1;
        setindexx(selected.current)
    }

    const onCliclRight = () => {
        if (interval) {
            stopNext()
        }

        selected.current = selected.current === data.length - 1 ? 0 : selected.current + 1;
        setindexx(selected.current)
    }
    return (
        <div id="characters">
            <div className="container">
                <div className="waper-title">
                    <p className="title">Characters</p>
                    <p className="big-title">Characters</p>
                </div>

                <div className="content">
                    <img className="arrow" src={ArrowLeft} alt="photos" onClick={onClickLeft}></img>

                    <div className="waper-name">
                        <img className="hmm" src={Unknow1} alt="photos"></img>
                        <div>

                            <img className={`${selected.current === 0 ? 'selected' : ''}`} style={{ marginLeft: '40px' }} src={data[0].icon} alt="photos"></img>
                            <img className={`${selected.current === 1 ? 'selected' : ''}`} style={{ marginLeft: '0px' }} src={data[1].icon} alt="photos"></img>
                            <img className={`${selected.current === 2 ? 'selected' : ''}`} style={{ marginLeft: '10px' }} src={data[2].icon} alt="photos"></img>
                            <img className={`${selected.current === 3 ? 'selected' : ''}`} style={{ marginLeft: '80px' }} src={data[3].icon} alt="photos"></img>
                        </div>
                    </div>

                    <div className="char">
                        {selected.current === 0 && <video className="orc" autoPlay={true} loop={true} src={data[selected.current].img} type="video/webm"></video>}
                        {selected.current === 1 && <video className="tienca" autoPlay={true} loop={true} src={data[selected.current].img} type="video/webm"></video>}
                        {selected.current === 2 && <video className="rong" autoPlay={true} loop={true} src={data[selected.current].img} type="video/webm"></video>}
                        {selected.current === 3 && <video className="tiennu" autoPlay={true} loop={true} src={data[selected.current].img} type="video/webm"></video>}
                    </div>


                    <img className="arrow" src={ArrowRight} alt="photos" onClick={onCliclRight}></img>
                </div>

                <div className="des">
                    <p className="name">{data[selected.current].name}</p>
                    <p className="txtt">{data[selected.current].des}</p>
                </div>

                <div className="group2-mobie">
                    <div>
                        <p className="name">{data[selected.current].name}</p>
                        <p className="txtt">{data[selected.current].des}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Characters