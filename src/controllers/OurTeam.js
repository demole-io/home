import Header from "../components/Header";
import Footer from "../components/Fooder";
import { useState } from "react";
import IconIn from '../assets/img/icon-in.png'
import Logan from '../assets/Team/logan1.jpg'
import Vincent from '../assets/Team/vin.jpg'
import Phan from '../assets/Team/TA.jpg'
import Denis from '../assets/Team/denis.jpg'
import Emilian from '../assets/Team/gomoi.jpg'
import Catalin from '../assets/Team/anton.jpg'
import Rae from '../assets/Team/lim.jpg'

export default function OurTeam() {
    const [data] = useState([
        {
            img: Logan,
            name: 'Logan Nguyen',
            office: 'Founder',
            description: 'Logan Nguyen is the founder of Demole.io. With six years working in the banking and finance sectors, he possessed a strong background in strategy management, customer experience, fintech, and marketing. He entered the crypto market in 2017 under different roles from an investor and project manager to start-up founder.',
            in: 'https://www.linkedin.com/in/nguyenduclong/'
        },
        {
            img: Vincent,
            name: 'Vincent Giap',
            office: 'Founder',
            description: 'Vincent Giap is the founder of Demole.io. He earned intuitive expertise in the crypto market combined with his expert knowledge in different fields, from finance to business management. He was behind the success of so many firms and companies, ranging from import-export to securities investment and crypto ventures.',
            in: 'https://www.linkedin.com/in/vincent-giap-929810211/'
        },
        {
            img: Denis,
            name: 'Denis Znamenskiy',
            office: 'CEO',
            description: 'Denis Znamenskiy is CEO of Demole.io. As a SPAC professional, Denis has  participated as a speaker at international blockchain events, advising fintech companies (Algochain, PrismCoin, Bibox, IndexChain, Demole.io). With solid experience in these field, he has worked as a systematic hedge fund manager focusing on liquid strategies, an algorithmic trader and quantitative research analyst, and an algorithmic Trading, Statistical Arbitrage, HFT (High-Frequency Trading), Cross-asset portfolio management, back-test, and optimization.',
            in: 'https://www.linkedin.com/in/denisznamenskiy/'
        },
        {
            img: Emilian,
            name: 'Emilian Gomoi',
            office: 'CTO',
            description: 'Emilian Gomoi is the CTO at Demole.io. Emillian was the CEO of a Romanian company - Rongir Co. Ltd., with direct experience in overseas outsourcing projects in IT design, training and the Multimedia industry.  Emillian by trade is a Physicist engineer with vast experience in electronic engineering and other related engineering disciplines. Besides being a software Developer and Project Manager for over 40 years, he also was licensed as Foreign Expert by the State Administration of Foreign Experts Affairs of China.',
            in: 'https://www.linkedin.com/in/emiliangomoi/'
        },
        {
            img: Phan,
            name: 'Phan Tuan Anh',
            office: 'Blockchain lead',
            description: 'Tuan Anh has 5 years of experience in smart contract design and code. Besides outsourcing for international projects, he has developed Empow blockchain specialized for social media. With his experience in technical structure, strategic thinking, and start-up training, he directly supervises and manages the work for the members of the blockchain team.',
            in: 'https://www.linkedin.com/in/ceoempow/'
        },
        {
            img: Catalin,
            name: 'Catalin Anton',
            office: 'COO',
            description: 'Catalin Anton is COO of Demole.io. Combining exceptional supply chain and logistics operations, procurement & IT experience.Catalin has increased efficiency, customer satisfaction, staff & financial performance for several organizations includingmulti-national & national organizations.  Catalins expertise includes Asian and European market strategy, business organization and analytics, performance management, contracts, sales channels, and manufacturing operations.',
            in: 'https://www.linkedin.com/in/antoncatalin/'
        },
        {
            img: Rae,
            name: 'Rae Lim',
            office: 'CMO',
            description: `Rae earned multiple expertise marketing in multinational FMCG companies to managing CSR corporates in a British multinational companies, and running start-ups. In 2018, she joined a digital assets advisory in Singapore to manage its marketing and investor relations. She has experience dealing with clients and projects that require investment access, funding projects, liquidity, consultancy, contracts and private placements in emerging technology markets.`,
            in: 'https://www.linkedin.com/in/theraelim'
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
