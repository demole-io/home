import React, { useEffect, useRef } from 'react'
import Header from '../components/Header'
import PayBtn from '../assets/img/Layer 1.png'
import Dragon from '../assets/img/rong 2.png'
import EggOpen from '../assets/video/egg-open_Trim.mp4'

export default function Summon() {

    const video = useRef(null)
    const dragon = useRef(null)
    const summonSection = useRef(null)

    useEffect(() => {
        const summonSectionHeight = summonSection.current.offsetHeight

        video.current.addEventListener("loadeddata", () => {
            const videoHeight = video.current.videoHeight
            let eggPositionAtBottom = videoHeight - (videoHeight * 0.72)
            eggPositionAtBottom = summonSectionHeight - videoHeight + eggPositionAtBottom
            dragon.current.style.bottom = `${eggPositionAtBottom}px`;
        })

        return () => {
        };
    }, []);

    function resetAnimation () {
        dragon.current.style.opacity = 0
        video.current.play()
    }

    function runAnimation () {
        dragon.current.style["z-index"] = 1
        setTimeout(() => {
            dragon.current.style.opacity = 1
        }, 1200)
    }

    const onClickPay = () => {
        resetAnimation()
        runAnimation()
    }

    return (
        <div id="summon" ref={summonSection}>
            <div className="video-background">
                <video preload="auto" ref={video} src={EggOpen} muted={true} type="video/mp4" playsInline={true}></video>
            </div>
            <img ref={dragon} className="dragon" src={Dragon} alt="photos"></img>
            <div className="wrapper">
                <Header></Header>
                <div className="container">
                    <div className="waper">
                        <div className="group2">
                            <img src={PayBtn} alt="photos" onClick={onClickPay}></img>
                            {/* <img src={Ques} alt="photos" className="ques"></img> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
