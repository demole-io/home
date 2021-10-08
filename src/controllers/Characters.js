import React, { useState, useEffect, useRef } from 'react'
import Unknow1 from '../assets/img/Subtract.png'

import iconGOBLIN from '../assets/img/phap su.png'
import iconOrc from '../assets/img/nguoi_cay.png'
import iconMEMALD from '../assets/img/nguoi_ca.png'
import iconKnight from '../assets/img/rong12.png'
import iconSHADOW from '../assets/img/bong_dem.png'

import iconWARRIOR from '../assets/img/thien_than.png'
import iconCOW from '../assets/img/nguoi xuong.png'
import iconHobbit from '../assets/img/nguoi lun.png'
import iconWolf from '../assets/img/nguoi soi.png'

import Char2 from '../assets/img/chien binh.png'
import Char3 from '../assets/img/chim.png'
import Char4 from '../assets/img/cung thủ.png'
import Char5 from '../assets/img/kỵ sĩ.png'
import Char6 from '../assets/img/nguoi khong lo.png'
import Char10 from '../assets/img/nhan ma.png'

import ArrowLeft from '../assets/img/muiten 2.png'
import ArrowRight from '../assets/img/muiten 1.png'

import * as PIXI from 'pixi.js'
import { Spine } from 'pixi-spine'
import $ from "jquery";

const Characters = props => {

    const [data] = useState([
        {
            json: 'wood',
            name: 'Treeman Tribe',
            icon: iconOrc,
            marginTop: 50,
            des: 'The murky old forests at the foot of the high cliffs in the northern part of the continent are inhabited by the Tree Tribe. Their territory is almost impregnable because of the murky darkness that is very scary. The inhabitants of the tribe were born from the trunks of thousands of years old trees, so their bodies were firm and soft, hazardous in team battles.'
        },
        {
            json: 'water',
            name: 'Merman Tribe',
            icon: iconMEMALD,
            marginTop: -15,
            des: 'Conquering the entire ocean, the Mermen have long harbored ambitions to dominate the continent. Mastering the vast sea, the Mermaids are especially strong in underwater battles. They regularly sent troops by the rivers to raid Middle-earth and infiltrate the mazes to loot resources.'
        },
        {
            json: 'dragon',
            name: 'Dragon Tribe',
            icon: iconKnight,
            marginTop: -30,
            des: 'Living in the caves on the high cliffs of the northern continent, the Dragon tribe is a mighty tribe with wings spread in the sky, a muscular body, and sharp claws. Dragons also have hard scales like armor to protect the body. With the advantage of flying high, the dragon tribe proved to be dominant in single hunting.'
        },
        {
            json: 'elf',
            name: 'GOBLIN Tribe',
            icon: iconGOBLIN,
            marginTop: -15,
            des: 'The shadow tribe is not of the world. Coming from the center of the galaxy, Shadow warriors are created by dark energy, extremely cruel and bloodthirsty. This hideously terrifying Shadow warrior desperately seeks for a world to live long in and to harbor ambitions for domination.'
        },
        {
            json: 'ghost',
            name: 'Shadow Tribe',
            icon: iconSHADOW,
            marginTop: 50,
            des: 'The shadow tribe is not of the world. Coming from the center of the galaxy, Shadow warriors are created by dark energy, extremely cruel and bloodthirsty. This hideously terrifying Shadow warrior desperately seeks for a world to live long in and to harbor ambitions for domination.'
        },
        // {
        //     name: 'Angel Tribe',
        //     icon: iconWARRIOR,
        //     img: WARRIOR,
        //     className: 'tiennu',
        //     poster: TiennuPoster,
        //     marginTop: -15,
        //     des: 'The remote Arctic place covered by snow all year round is the home of the Angel tribe. They were born from holy souls. When they grow up, the members of the Angel Tribe spread out everywhere, linking up with many different tribes to help them fight. The Angel Tribe is famous as a tribe that has no enemies.'
        // },
        // {
        //     name: 'HOBBIT Tribe',
        //     icon: iconHobbit,
        //     img: HOBBIT,
        //     className: 'hobbit',
        //     poster: HobbitPoster,
        //     marginTop: -60,
        //     des: 'The shadow tribe is not of the world. Coming from the center of the galaxy, Shadow warriors are created by dark energy, extremely cruel and bloodthirsty. This hideously terrifying Shadow warrior desperately seeks for a world to live long in and to harbor ambitions for domination.'
        // },
        // {
        //     name: 'WOLF Tribe',
        //     icon: iconWolf,
        //     img: WOLF,
        //     className: 'wolf',
        //     poster: WolfPoster,
        //     marginTop: -30,
        //     des: 'The shadow tribe is not of the world. Coming from the center of the galaxy, Shadow warriors are created by dark energy, extremely cruel and bloodthirsty. This hideously terrifying Shadow warrior desperately seeks for a world to live long in and to harbor ambitions for domination.'
        // },
        // {
        //     name: 'GOBLIN Tribe',
        //     icon: iconGOBLIN,
        //     img: GOBLIN,
        //     className: 'goblin',
        //     poster: GoblinPoster,
        //     marginTop:10,
        //     des: 'The shadow tribe is not of the world. Coming from the center of the galaxy, Shadow warriors are created by dark energy, extremely cruel and bloodthirsty. This hideously terrifying Shadow warrior desperately seeks for a world to live long in and to harbor ambitions for domination.'
        // },
        // {
        //     name: 'COW Tribe',
        //     icon: iconCOW,
        //     img: COW,
        //     className: 'cow',
        //     poster: CowPoster,
        //     marginTop: 100,
        //     des: 'The shadow tribe is not of the world. Coming from the center of the galaxy, Shadow warriors are created by dark energy, extremely cruel and bloodthirsty. This hideously terrifying Shadow warrior desperately seeks for a world to live long in and to harbor ambitions for domination.'
        // },
    ])

    const [dataa] = useState([
        {
            name: 'Treeman Tribe',
            icon: iconOrc,
            des: 'The murky old forests at the foot of the high cliffs in the northern part of the continent are inhabited by the Tree Tribe. Their territory is almost impregnable because of the murky darkness that is very scary. The inhabitants of the tribe were born from the trunks of thousands of years old trees, so their bodies were firm and soft, hazardous in team battles.'
        },
        {
            name: 'Merman Tribe',
            icon: iconMEMALD,
            des: 'Conquering the entire ocean, the Mermen have long harbored ambitions to dominate the continent. Mastering the vast sea, the Mermaids are especially strong in underwater battles. They regularly sent troops by the rivers to raid Middle-earth and infiltrate the mazes to loot resources.'
        },
        {
            name: 'Dragon Tribe',
            icon: iconKnight,
            des: 'Living in the caves on the high cliffs of the northern continent, the Dragon tribe is a mighty tribe with wings spread in the sky, a muscular body, and sharp claws. Dragons also have hard scales like armor to protect the body. With the advantage of flying high, the dragon tribe proved to be dominant in single hunting.'
        },
        {
            name: 'Angel Tribe',
            icon: iconWARRIOR,
            des: 'The remote Arctic place covered by snow all year round is the home of the Angel tribe. They were born from holy souls. When they grow up, the members of the Angel Tribe spread out everywhere, linking up with many different tribes to help them fight. The Angel Tribe is famous as a tribe that has no enemies.'
        },
        {
            name: 'Shadow Tribe',
            icon: iconSHADOW,
            des: 'The shadow tribe is not of the world. Coming from the center of the galaxy, Shadow warriors are created by dark energy, extremely cruel and bloodthirsty. This hideously terrifying Shadow warrior desperately seeks for a world to live long in and to harbor ambitions for domination.'
        },
        {
            icon: iconHobbit,
            des: 'The shadow tribe is not of the world. Coming from the center of the galaxy, Shadow warriors are created by dark energy, extremely cruel and bloodthirsty. This hideously terrifying Shadow warrior desperately seeks for a world to live long in and to harbor ambitions for domination.'
        },
        {
            icon: iconWolf,
            des: 'The shadow tribe is not of the world. Coming from the center of the galaxy, Shadow warriors are created by dark energy, extremely cruel and bloodthirsty. This hideously terrifying Shadow warrior desperately seeks for a world to live long in and to harbor ambitions for domination.'
        },
        {
            icon: iconGOBLIN,
            des: 'The shadow tribe is not of the world. Coming from the center of the galaxy, Shadow warriors are created by dark energy, extremely cruel and bloodthirsty. This hideously terrifying Shadow warrior desperately seeks for a world to live long in and to harbor ambitions for domination.'
        },
        {
            icon: iconCOW,
            des: 'The shadow tribe is not of the world. Coming from the center of the galaxy, Shadow warriors are created by dark energy, extremely cruel and bloodthirsty. This hideously terrifying Shadow warrior desperately seeks for a world to live long in and to harbor ambitions for domination.'
        },
        {
            icon: Char2
        },
        {
            icon: Char3
        },
        {
            icon: Char4
        },
        {
            icon: Char5
        },
        {
            icon: Char6
        },
        {
            icon: Char10
        },
    ])

    const selected = useRef(0)
    const [index, setindex] = useState(0)
    const interval = useRef(null)

    const stopNext = () => {
        if (interval.current) clearInterval(interval.current)
    }

    const onClickName = (index) => {
        if (index > 4) {
            return;
        }
        stopNext()

        selected.current = index;
        setindex(selected.current)

        setArt(index)

    }

    const onClickLeft = () => {
        stopNext()
        selected.current = selected.current === 0 ? data.length - 1 : selected.current - 1;
        setindex(selected.current)

        setArt(selected.current)

    }

    const onClickRight = () => {
        stopNext()
        selected.current = selected.current === data.length - 1 ? 0 : selected.current + 1;
        setindex(selected.current)

        setArt(selected.current)
    }

    const onClickHinhTron = (key) => {
        stopNext()

        selected.current = key;
        setindex(selected.current)

        setArt(selected.current)
    }

    const setArt = (index) => {
        if (data[index].json === 'wood') {
            app.stage.addChild(artWood);
        }

        if (data[index].json === 'water') {
            app.stage.addChild(artWater);
        }

        if (data[index].json === 'dragon') {
            app.stage.addChild(artDragon);
        }

        if (data[index].json === 'elf') {
            app.stage.addChild(artElf);
        }

        if (data[index].json === 'ghost') {
            app.stage.addChild(artGhost);
        }

        const characters = document.querySelector('#characters .char');
        $("#characters .char").empty();
        characters.appendChild(app.view);
    }

    const app = new PIXI.Application({
        width: 500, height: 500, transparent: true
    });

    const [artDragon, setartDragon] = useState()
    const [artElf, setartElf] = useState()
    const [artGhost, setartGhost] = useState()
    const [artWater, setartWater] = useState()
    const [artWood, setartWood] = useState()


    useEffect(() => {
        // load spine data
        const characters = document.querySelector('#characters .char');
        $("#characters .char").empty();
        characters.appendChild(app.view);

        console.log("useEffect")
        app.loader
            .add('dragon', '/json/dragon/Dragon_Clan.json')
            .add('elf', '/json/elf/Elf_Clan.json')
            .add('ghost', '/json/ghost/Ghost_Clan.json')
            .add('water', '/json/water/Water.json')
            .add('wood', '/json/wood/Wood.json')
            .load(onAssetsLoaded);

        function onAssetsLoaded(loader, res) {
            const spineDataDragon = res.dragon.spineData
            const spineDataElf = res.elf.spineData
            const spineDataGhost = res.ghost.spineData
            const spineDataWater = res.water.spineData
            const spineDataWood = res.wood.spineData

            //Dragon
            let artDragon = new Spine(spineDataDragon);
            artDragon.x = app.screen.width / 2;
            artDragon.y = app.screen.height - 150;
            const HeadDragon = spineDataDragon.findSkin('Head/Head_1')
            const BodyDragon = spineDataDragon.findSkin('Body/Body_1')
            const WingDragon = spineDataDragon.findSkin('Wing/Wing_1')
            HeadDragon.addSkin(BodyDragon)
            HeadDragon.addSkin(WingDragon)
            artDragon.skeleton.setSkinByName('Head/Head_1');
            artDragon.scale.set(0.2);
            artDragon.state.setAnimation(0, 'show', true);
            setartDragon(artDragon)

            //Elf
            let artElf = new Spine(spineDataElf);
            artElf.x = app.screen.width / 2;
            artElf.y = app.screen.height - 150;
            const HeadElf = spineDataElf.findSkin('Head/Head_1')
            const BodyElf = spineDataElf.findSkin('Body/Body_1')
            const WingElf = spineDataElf.findSkin('Wing/Wing_1')
            HeadElf.addSkin(BodyElf)
            HeadElf.addSkin(WingElf)
            artElf.skeleton.setSkinByName('Head/Head_1');
            artElf.scale.set(0.2);
            artElf.state.setAnimation(0, 'show', true);
            setartElf(artElf)

            //Ghost
            let artGhost = new Spine(spineDataGhost);
            artGhost.x = app.screen.width - 300;
            artGhost.y = app.screen.height - 100;
            const HeadGhost = spineDataGhost.findSkin('Head/Head_1')
            const BodyGhost = spineDataGhost.findSkin('Body/Body_1')
            const HandGhost = spineDataGhost.findSkin('Hand/Hand_1')
            HeadGhost.addSkin(BodyGhost)
            HeadGhost.addSkin(HandGhost)
            artGhost.skeleton.setSkinByName('Head/Head_1');
            artGhost.scale.set(0.2);
            artGhost.state.setAnimation(0, 'show', true);
            setartGhost(artGhost)


            //Water
            let artWater = new Spine(spineDataWater);
            artWater.x = app.screen.width - 200;
            artWater.y = app.screen.height - 150;
            const HeadWater = spineDataWater.findSkin('Head/Head_1')
            const ArmorWater = spineDataWater.findSkin('Armor/Wood')
            const TailWater = spineDataWater.findSkin('Tail/Tail_1')
            const WeaponWater = spineDataWater.findSkin('Weapon/Weapon_3')
            HeadWater.addSkin(ArmorWater)
            HeadWater.addSkin(TailWater)
            HeadWater.addSkin(WeaponWater)
            artWater.skeleton.setSkinByName('Head/Head_1');
            artWater.scale.set(0.2);
            artWater.state.setAnimation(0, 'show', true);
            setartWater(artWater)

            //Wood
            let artWood = new Spine(spineDataWood);
            artWood.x = app.screen.width - 120;
            artWood.y = app.screen.height - 150;
            const HeadWood = spineDataWood.findSkin('Head/Head_3')
            const LeftHandWood = spineDataWood.findSkin('L_Hand/L_Hand_1')
            const ArmorWood = spineDataWood.findSkin('Armor/Wood')
            const RightHandWood = spineDataWood.findSkin('R_Hand/R_Hand_3')
            HeadWood.addSkin(LeftHandWood)
            HeadWood.addSkin(ArmorWood)
            HeadWood.addSkin(RightHandWood)
            artWood.skeleton.setSkinByName('Head/Head_3');
            artWood.scale.set(0.2);
            artWood.state.setAnimation(0, 'show', true);
            setartWood(artWood)

            app.stage.addChild(artWood);
        }
    }, [])

    return (
        <div id="characters">
            <div className="container">
                <div className="wraper-name-mobile">
                    <div>
                        {data.map((value, indexx) => {
                            return <img key={indexx} onClick={() => onClickName(indexx)} className={`${index === indexx ? 'selected' : ''}`} style={{ marginTop: `${value.marginTop}px` }} src={value.icon} alt="photos"></img>
                        })}
                    </div>

                    <img className="hmm" src={Unknow1} alt="photos"></img>
                </div>
                <div className="wraper-info">
                    <div className="left">
                        <img className="arrow" src={ArrowLeft} onClick={() => onClickLeft()} alt="photos"></img>
                        <div className="char">
                        </div>
                        <img className="arrow" src={ArrowRight} onClick={() => onClickRight()} alt="photos"></img>
                    </div>

                    <div className="wraper-hinhtron">
                        {data.map((value, key) => {
                            return (
                                <div key={key} className={`hinhtron ${index === key ? 'selectedd' : ''}`} onClick={() => onClickHinhTron(key)}>
                                </div>
                            )
                        })}
                    </div>

                    <div className="right">
                        <span>BUILD YOUR OWN MONSTER SQUAD</span>
                        <div>
                            <p className="name">{data[index].name}</p>
                            <p className="txtt">{data[index].des}</p>
                        </div>
                    </div>


                </div>

                <div className="wraper-name">
                    {data.map((value, indexx) => {
                        return (
                            <div key={indexx} className={`${index === indexx ? 'selected' : ''} ${value.name ? 'avai' : 'invai'}`}>
                                <img onClick={() => onClickName(indexx)} src={value.icon} alt="photos"></img>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Characters