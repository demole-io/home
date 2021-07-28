import React, { useState, useEffect } from 'react'
import Fooder from '../components/Fooder'
import Header from '../components/Header'
import Elip from '../assets/img/Ellipse 19.png'
import { useHistory } from "react-router-dom";

const MonterDetail = props => {
    const [didMount, setDidMount] = useState(false)
    const [detail, setdetail] = useState(false)
    const [indexx, setindexx] = useState(false)

    const [bodyParts, setbodyParts] = useState([
        {
            title: 'Body Ribcage',
            des: 'Epic',
            img: Elip
        },
        {
            title: 'Body Ribcage',
            des: 'Epic',
            img: Elip
        },
        {
            title: 'Body Ribcage',
            des: 'Epic',
            img: Elip
        },
        {
            title: 'Body Ribcage',
            des: 'Epic',
            img: Elip
        },
        {
            title: 'Body Ribcage',
            des: 'Epic',
            img: Elip
        },
        {
            title: 'Body Ribcage',
            des: 'Epic',
            img: Elip
        }
    ])

    const history = useHistory()

    useEffect(() => {
        if (didMount) {
            console.log("Did Update");
        } else {
            setDidMount(true);
            console.log("Did mount");
            console.log(props.location)
            setdetail(props.location && props.location.state ? props.location.state.value : false)
            setindexx(props.location && props.location.state ? props.location.state.indexx : false)
        }
    });

    const goBack = () => {
        history.goBack()
    }

    const renderChildBody = (value, index) => {
        return (
            <div className="gr-child">
                <img src={value.img} alt="photos"></img>
                <div>
                    <p>{value.title}</p>
                    <span>{value.des}</span>
                </div>
            </div>
        )
    }

    const renderOffers = () => {
        return (
            <div className="offer-table">
                <div className="waper-offer tl">
                    <p>From</p>
                    <p>Price</p>
                    <p>Time</p>
                </div>
                {detail.offers.map((value, index) => {
                    return <div className="waper-offer">
                        <p>{value.from}</p>
                        <p>{value.price}</p>
                        <p>{value.time}</p>
                    </div>
                })}

            </div>
        )
    }

    const renderHistory = () => {
        return (
            <div className="offer-table">
                <div className="waper-offer tl">
                    <p>Event</p>
                    <p>Price</p>
                    <p>From</p>
                    <p>To</p>
                    <p>Date</p>
                </div>
                {detail.offers.map((value, index) => {
                    return <div className="waper-offer">
                        <p>{value.event}</p>
                        <p>{value.price}</p>
                        <p>{value.from}</p>
                        <p>{value.to}</p>
                        <p>{value.time}</p>
                    </div>
                })}

            </div>
        )
    }


    return (
        <div id="monter-detail">
            <Header></Header>
            <div className="container">
                <div className="waper-info">
                    <div className="left">
                        <p className="back" onClick={() => goBack()}> &lt; Back</p>
                        <span>#{indexx + 1}</span>
                        <p>{detail.name}</p>
                        <img src={detail.img} alt="photos"></img>
                    </div>
                    <div className="right">
                        <div className="group1">
                            <button>BUY NOW</button>
                            <div>
                                <span>${detail.dola}</span>
                                <p>Floor Price: {detail.floorPrice} BNB</p>
                            </div>
                        </div>
                        <div className="group2">
                            <div className="gr-child">
                                <div>
                                    <span>Class</span>
                                    <p>{detail.class}</p>
                                </div>

                                <div>
                                    <span>Level</span>
                                    <p>{detail.level}</p>
                                </div>

                                <div>
                                    <span>Type</span>
                                    <p>{detail.type}</p>
                                </div>
                            </div>

                            <p>Owner: {detail.owner}</p>
                        </div>

                        <p className="titlee">Stats</p>
                        <div className="group3">
                            <div>
                                <span>Strength</span>
                                <p>{detail.strength}</p>
                            </div>
                            <div>
                                <span>Ability</span>
                                <p>{detail.ability}</p>
                            </div>
                            <div>
                                <span>Intelligence</span>
                                <p>{detail.intelligence}</p>
                            </div>
                            <div>
                                <span>Luck</span>
                                <p>{detail.luck}</p>
                            </div>
                        </div>

                        <p className="titlee">Body Parts</p>

                        <div className="group4">
                            {bodyParts.map((value, index) => {
                                return renderChildBody(value, index)
                            })}
                        </div>

                        <p className="titlee">Offers</p>
                        {detail.offers && renderOffers()}
                        <button>Make offer</button>

                    </div>
                </div>

                <div className="waper-event">
                    <p className="titlee">SALE HISTORY</p>
                    {detail.events && renderHistory()}

                </div>
            </div>
            <Fooder></Fooder>

        </div>
    )
}

export default MonterDetail