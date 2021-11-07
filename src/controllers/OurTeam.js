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
            description: 'Denis Znamenskiy is CEO of Demole.io. As a SPAC professional, Denis has  participated as a speaker at international blockchain events, advising fintech companies (PrismCoin, Bibox, IndexChain, Demole.io). With solid experience in these field, he has worked as a systematic hedge fund manager focusing on liquid strategies, an algorithmic trader and quantitative research analyst, and an algorithmic Trading, Statistical Arbitrage, HFT (High-Frequency Trading), Cross-asset portfolio management, back-test, and optimization.',
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
            description: `Rea earned multiple expertise from marketing in multinational FMCG companies to managing CSR corporates in a British multinational companies, and running her own start-ups. She joined a digital asset advisory in Singapore in 2018 in which she experienced in Finance and Investors relation, PR & Marketing, and consultancy in emerging technology markets.`,
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
                    D.A.R Labs is a Game and Blockchain Development Group with a team of experts and experienced professions in different fields from Game Dev, Tech/Engineering, Finance and BA. We are in partnership with more than 300+ top-tier financial corporations, VCs, and influencers worldwide. We provide full-package business services from advisory to business modelling and marketing for early startups.
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
