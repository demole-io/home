import React, { useState, useEffect } from 'react'
import Fooder from '../components/Fooder'
import Header from '../components/Header'

const MonterDetail = props => {
    const [didMount, setDidMount] = useState(false)
    const [detail, setdetail] = useState(false)
    const [indexx, setindexx] = useState(false)

    useEffect(() => {
        if (didMount) {
            console.log("Did Update");
        } else {
            setDidMount(true);
            console.log("Did mount");
            console.log(props.location);
            setdetail(props.location && props.location.state ? props.location.state.value : false)
            setindexx(props.location && props.location.state ? props.location.state.indexx : false)
        }
    });


    return (
        <div id="monter-detail">
            <Header></Header>
            <div className="container">
                <div className="waper-info">
                    <div className="left">
                        <span>#{indexx + 1}</span>
                        <p>{detail.name}</p>
                        <img src={detail.img} alt="photos"></img>
                    </div>
                    <div className="right">
                        <p>{detail.dola}</p>
                        <p>Floor Price: {detail.floorPrice} BNB</p>

                        <div>
                            <div>
                                <div>
                                    <p>Class</p>
                                    <p>{detail.class}</p>
                                </div>

                                <div>
                                    <p>Level</p>
                                    <p>{detail.level}</p>
                                </div>

                                <div>
                                    <p>Type</p>
                                    <p>{detail.type}</p>
                                </div>
                            </div>

                            <p>Owner: {detail.owner}</p>
                        </div>

                        <p>Stats</p>

                        <div>
                            <div>
                                <p>Strength</p>
                                <p>{detail.strength}</p>
                            </div>
                            <div>
                                <p>Ability</p>
                                <p>{detail.ability}</p>
                            </div>
                            <div>
                                <p>Intelligence</p>
                                <p>{detail.intelligence}</p>
                            </div>
                            <div>
                                <p>Luck</p>
                                <p>{detail.luck}</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="waper-offer">

                </div>

                <div className="waper-event">

                </div>
            </div>
            {/* <Fooder></Fooder> */}

        </div>
    )
}

export default MonterDetail
