import Header from "../components/Header";
import Footer from "../components/Fooder";
import { useState } from "react";
import IconIn from '../assets/img/icon-in.png'
import Emilian from '../assets/img/Emilian Gomoi.jpg'
import Catalin from '../assets/img/Catalin Anton.jpg'
import Denis from '../assets/img/Denis Znamenskiy.jpg'

export default function OurTeam() {
    const [data, setdata] = useState([
        {
            img: Emilian,
            name: 'Emilian Gomoi',
            office: 'CTO',
            description: 'Emilian Gomoi is CTO (Chief technology officer) at DEMOLE.io. He is experienced as a business executive and CEO of  Romanian company, with direct experience in overseas outsourcing projects in IT design, training and the Multimedia industry. Since the start of his career journey, he was a Physicist engineer with vast experience in electronic engineering and other related engineering disciplines. Besides being a software Developer and Project Manager for over 40 years, he also was licensed as Foreign Expert by the State Administration of Foreign Experts Affairs of China.',
            in: 'https://www.linkedin.com/in/emiliangomoi/'
        },
        {
            img: Catalin,
            name: 'Catalin Anton',
            office: 'COO',
            description: 'Catalin Anton is COO (Chief organization officer) of Demole.io. Combining exceptional supply chain and logistics operations, procurement & IT experience, he increased efficiency, customer satisfaction, staff & financial performance for several organizations for  multi-national & national organizations he worked. With expertise includes Asian and European market strategy, business organization and analytics, performance management, contracts, sales channels, and manufacturing operations, he will take charge of managing the working procedure in D.A.R Labs.',
            in: 'https://www.linkedin.com/in/antoncatalin/'
        },
        {
            img: Denis,
            name: 'Denis Znamenskiy',
            office: 'CEO',
            description: 'Denis Znamenskiy is CEO (Chief executive officer) of Demole.io. As a SPAC professional, he participated as a speaker at international blockchain events, advising fintech companies (Algochain, PrismCoin, Bibox, IndexChain, Demole.io). With solid experience, he had worked as a systematic hedge fund manager focusing on liquid strategies, an algorithmic trader and quantitative research analyst, and an algorithmic Trading, Statistical Arbitrage, HFT (High-Frequency Trading), Cross-asset portfolio management, back-test, and optimization.',
            in: 'https://www.linkedin.com/in/denisznamenskiy/ '
        },
    ])

    const renderMember = (value) => {
        return (
            <a href={value.in} target="_blank" rel="noreferrer" className="child">
                <div className="card">
                    <div className="wrapper-image">
                        <img className="avatar" src={value.img} alt="photos"></img>
                        <div className="name">{value.name}</div>
                        <div className="office">{value.office}</div>
                        <img className="icon-in" src={IconIn} alt="photos"></img>

                    </div>
                    <div className="info">
                        <div className="name">{value.name}</div>
                        <div className="office">{value.office}</div>
                        <div className="des">{value.description}</div>
                    </div>
                </div>
            </a>
        )
    }

    return (
        <div id="our-team">
            <Header />
            <div className="container">
                <p className="titleTxt">OUR TEAM</p>
                <p className="description">
                    D.A.R Labs is a game publisher that owns a team of over 50 veteran game and platform developers in blockchain generally and cryptocurrency particularly. We are passionate about the delight of bringing a new foundation shift for blockchain-based games.
                    <br></br><br></br>
                    The D.A.R ecosystem is the perfect synthesis of NFT gaming and DeFi environment, giving chances to users to have fun and earn profit synchronously. The comprehensive ecosystem is made up of a 3D role-playing NFT game with fantastic gameplay, a cross-chained NFT marketplace, NFT collectibles, and HERO token. Furthermore, a great social network experience bringed by our supportive community is another perfection.
                    <br></br><br></br>
                    D.A.R young team is passionate about blockchain and the game industry. We’re game-lovers with the desire to create legendary characters and bring them to life. That’s why we soon started working in D.A.R Labs to introduce the magic of Blockchain technology to billions of players. To think about the team, let’s say: Unstoppable, unbelievable, and unprecedented - 3U for 1-another-U that’s “universe” built by D.A.R Labs.

                </p>
                <div className="list-team">
                    {data.map((value, index) => {
                        return renderMember(value)
                    })}
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
