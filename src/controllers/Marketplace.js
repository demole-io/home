import React, { useState } from 'react'
import Header from '../components/Header'
import Knight from '../assets/img/rong 2.png'
import ORC from '../assets/img/Orc2.png'
import WARRIOR from '../assets/img/Tiennu.png'
import MEMALD from '../assets/img/nguoica.png'
import SHADOW from '../assets/img/ezgif.com-gif-maker_11_-removebg-preview.png'
import Fooder from '../components/Fooder'
import { Link } from 'react-router-dom'
import SearchIcon from '../assets/img/akar-icons_search.png'

export default function Marketplace() {

    const [filter] = useState([
        {
            category: 'Type',
            detail: [
                { name: 'Fire' },
                { name: 'Fire' },
                { name: 'Fire' },
                { name: 'Fire' },
                { name: 'Fire' },
                { name: 'Fire' },
                { name: 'Fire' },
            ]
        },
        {
            category: 'Type 2',
            detail: [
                { name: 'Fire' },
                { name: 'Fire' },
                { name: 'Fire' },
                { name: 'Fire' },
                { name: 'Fire' },
                { name: 'Fire' },
                { name: 'Fire' },
            ]
        },
    ])

    const [listMonter] = useState([
        {
            name: 'knight',
            img: Knight,
            level: 1,
            type: 'Thunder',
            floorPrice: 0.11,
            dola: 31.2,
            class: 'Knight',
            owner: '0xaf469c0e3015ed0683c46a694dd80cfd7f280bed',
            strength: 'Knight',
            ability: 1,
            intelligence: 'Thunder',
            luck: 'Thunder',
            offers: [
                {
                    from: '0x7f...60f9',
                    price: 5,
                    time: '	2 days ago'
                },
                {
                    from: '0x7f...60f9',
                    price: 5,
                    time: '	2 days ago'
                },
                {
                    from: '0x7f...60f9',
                    price: 5,
                    time: '	2 days ago'
                },
                {
                    from: '0x7f...60f9',
                    price: 5,
                    time: '	2 days ago'
                },
                {
                    from: '0x7f...60f9',
                    price: 5,
                    time: '	2 days ago'
                },
            ],
            events: [
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },

                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
            ]
        },
        {
            name: 'ORC',
            img: ORC,
            level: 1,
            type: 'Thunder',
            floorPrice: 0.11,
            dola: 31.2,
            class: 'Knight',
            owner: '0xaf469c0e3015ed0683c46a694dd80cfd7f280bed',
            strength: 'Knight',
            ability: 1,
            intelligence: 'Thunder',
            luck: 'Thunder',
            offers: [
                {
                    from: '0x7f...60f9',
                    price: 5,
                    time: '	2 days ago'
                },
                {
                    from: '0x7f...60f9',
                    price: 5,
                    time: '	2 days ago'
                },
                {
                    from: '0x7f...60f9',
                    price: 5,
                    time: '	2 days ago'
                },
                {
                    from: '0x7f...60f9',
                    price: 5,
                    time: '	2 days ago'
                },
                {
                    from: '0x7f...60f9',
                    price: 5,
                    time: '	2 days ago'
                },
            ],
            events: [
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },

                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
            ]
        },
        {
            name: 'WARRIOR',
            img: WARRIOR,
            level: 1,
            type: 'Thunder',
            floorPrice: 0.11,
            dola: 31.2,
            class: 'Knight',
            owner: '0xaf469c0e3015ed0683c46a694dd80cfd7f280bed',
            strength: 'Knight',
            ability: 1,
            intelligence: 'Thunder',
            luck: 'Thunder',
            offers: [
                {
                    from: '0x7f...60f9',
                    price: 5,
                    time: '	2 days ago'
                },
                {
                    from: '0x7f...60f9',
                    price: 5,
                    time: '	2 days ago'
                },
                {
                    from: '0x7f...60f9',
                    price: 5,
                    time: '	2 days ago'
                },
                {
                    from: '0x7f...60f9',
                    price: 5,
                    time: '	2 days ago'
                },
                {
                    from: '0x7f...60f9',
                    price: 5,
                    time: '	2 days ago'
                },
            ],
            events: [
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },

                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
            ]
        },
        {
            name: 'MEMALD',
            img: MEMALD,
            level: 1,
            type: 'Thunder',
            floorPrice: 0.11,
            dola: 31.2,
            class: 'Knight',
            owner: '0xaf469c0e3015ed0683c46a694dd80cfd7f280bed',
            strength: 'Knight',
            ability: 1,
            intelligence: 'Thunder',
            luck: 'Thunder',
            offers: [
                {
                    from: '0x7f...60f9',
                    price: 5,
                    time: '	2 days ago'
                },
                {
                    from: '0x7f...60f9',
                    price: 5,
                    time: '	2 days ago'
                },
                {
                    from: '0x7f...60f9',
                    price: 5,
                    time: '	2 days ago'
                },
                {
                    from: '0x7f...60f9',
                    price: 5,
                    time: '	2 days ago'
                },
                {
                    from: '0x7f...60f9',
                    price: 5,
                    time: '	2 days ago'
                },
            ],
            events: [
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },

                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
            ]
        },
        {
            name: 'SHADOW',
            img: SHADOW,
            level: 1,
            type: 'Thunder',
            floorPrice: 0.11,
            dola: 31.2,
            class: 'Knight',
            owner: '0xaf469c0e3015ed0683c46a694dd80cfd7f280bed',
            strength: 'Knight',
            ability: 1,
            intelligence: 'Thunder',
            luck: 'Thunder',
            offers: [
                {
                    from: '0x7f...60f9',
                    price: 5,
                    time: '	2 days ago'
                },
                {
                    from: '0x7f...60f9',
                    price: 5,
                    time: '	2 days ago'
                },
                {
                    from: '0x7f...60f9',
                    price: 5,
                    time: '	2 days ago'
                },
                {
                    from: '0x7f...60f9',
                    price: 5,
                    time: '	2 days ago'
                },
                {
                    from: '0x7f...60f9',
                    price: 5,
                    time: '	2 days ago'
                },
            ],
            events: [
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },

                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
                {
                    event: 'OFFER',
                    price: 0.05,
                    from: '0x7f...60f9',
                    to: '0x7f...60f9',
                    time: '	2 days ago'
                },
            ]
        }
    ])

    const renderMonster = (value, index) => {
        return (
            <div className="monter">
                <div className="title">
                    <p></p>
                    <p>{value.name}</p>
                    <span>#{index + 1}</span>

                </div>

                <div className="img">
                    <img src={value.img} alt="photos"></img>
                </div>

                <div className="price">
                    <p>PRICE: 500 XXX</p>
                    <p>Floor Price: {value.floorPrice} UNI</p>
                </div>

                <Link to={{
                    pathname: `/monster-detail/${index}`,
                    state: {
                        value,
                        indexx: index
                    }
                }}>
                    <button>
                        Buy now
                    </button>
                </Link>
            </div>
        )
    }

    const renderListMonster = () => {
        return (
            <div className="waper-list-monter">
                {listMonter.map((value, index) => {
                    return renderMonster(value, index)
                })}
            </div>
        )
    }

    const renderCategory = (value, index) => {
        return (
            <div className="category">
                <p>{value.category}</p>
                <div className="waper-detail">
                    {value.detail.map((valuee, indexx) => {
                        return (
                            <div className="detail">
                                <input type="checkbox" />
                                <p>{valuee.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    const renderFilter = () => {
        return (
            <div className="waper-filter">
                {filter.map((value, index) => {
                    return renderCategory(value, index)
                })}
            </div>
        )
    }

    return (
        <div id="marketplace">
            <Header></Header>
            <div className="container">
                <p className="des">Transfer heroes, purchase equipment or simply find a missing piece to engage the battles?
                    <br></br>
                    Welcome to “The Unicorn’s Horn market”, you can find the best things to prepare for you next hunting trip.</p>

                <div className="waper-info">
                    <div>
                        <p>Total</p>
                        <p>200 heroes</p>
                    </div>
                    <div>
                        <p>Total volume</p>
                        <p>3509.63900 BNB</p>
                    </div>
                    <div>
                        <p>Highest price</p>
                        <p>51 BNB</p>
                    </div>
                </div>

                <div className="menuu">
                    <p>Filter</p>
                    <p>Clear Filter</p>
                    <div>
                        <span>Sale</span>
                        <p>For Sale</p>
                    </div>
                    <div>
                        <span>Sort</span>
                        <p>Lowest ID</p>
                    </div>
                    <div className="search">
                        <img src={SearchIcon} alt="photos"></img>
                        <input placeholder="Search NFT character"></input>
                    </div>
                </div>

                <div className="waper-content">
                    {renderFilter()}
                    {renderListMonster()}
                </div>


            </div>
            <Fooder></Fooder>
        </div>
    )
}
