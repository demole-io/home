import React, { useEffect, useRef, useState } from 'react'
import Logo from '../assets/img/logo02 1.png'
import $ from 'jquery'
import styled, { keyframes } from 'styled-components'

const TextTyping = keyframes`
    from {
        width: 0;
    }
`;

const Blink = keyframes`
    50% {
        border-color: transparent;
    }
`;

const Text = styled.p`
    width: ${props => props.len || 22}ch;
    animation: ${TextTyping} ${props => props.typingTime || 5}s steps(${props => props.len || 22}), ${Blink} 0.5s step-end infinite alternate;
    ${props => !props.animation && "width: '0ch';"}
    ${props => !props.animation && "animation: 'none';"}
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-weight: bold;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 80vh;
`;


const Home = props => {
    const text1 = `Our early world was in chaos.
    Many monster tribes lived on the same continents and oceans.
    They were born from the seeds of both gods and demons, some of them coming from the universe.
    The tribes often war to expand their territory and show their strength and ambition to dominate the world.
    However, tribes now have to join together to increase their strength to fight common enemies - beasts born from the death machines.
    Build your own army of monsters and embark on a journey to liberate the holy land.`
    const [content, setcontent] = useState("")
    const [animation, setanimation] = useState(false)
    const [indexx, setindexx] = useState(0)

    const typingTimePerCharacter = 0.07

    var textArr = text1.split(".")

    useEffect(() => {

        $('#home .container .title').css({
            opacity: '1',
            transform: "translateY(0px)"
        })

        setTimeout(() => {
            $('#home .container .title').css({
                opacity: '0',
                transform: "translateY(-50px)"
            })

            setTimeout(() => {
                $('#home .container .title').css({
                    display: 'none',
                })
            }, 2000)
        }, 4000);

        setTimeout(() => {
            $('#home .container .wraper-hinhtron').css({
                opacity: '1',
            })
        }, 6000);

     

        textArr = text1.split(".")
        if (props.isMobile) {
            textArr = [
                "Our early world was in chaos",
                "Many monster tribes lived on the same continents and oceans",
                "They were born from the seeds of both gods and demons,",
                "some of them coming from the universe",
                "The tribes often war to expand their territory",
                "and show their strength and ambition to dominate the world",
                "However, tribes now have to join together",
                "to increase their strength",
                "to fight common enemies - beasts born from the death machines",
                "Build your own army of monsters and embark on a journey to liberate the holy land"
            ]
        }

        const typingDelay = []
        let sum = 0

        textArr.map((value, key) => {
            typingDelay[key] = sum
            sum += value.length * typingTimePerCharacter + 3
        })

        setTimeout(() => {
            textArr.map((value, key) => {
                setTimeout(() => {
                    setindexx(key)
                    if (key === 0) {
                        setanimation(true)
                        setindexx(key)
                        setcontent(value)
                    } else {
                        setanimation(false)

                        setTimeout(() => {
                            setanimation(true)
                            setindexx(key)
                            setcontent(value)
                        }, 3000)
                    }
                }, (typingDelay[key] + 3) * 1000)
            })
        }, 3000)


        if (props.isMobile) {
            setTimeout(() => {
                $('#home .container .content').css({
                    display: 'block',
                })

                setTimeout(() => {
                    $('#home .container .content').css({
                        opacity: '1',
                        transform: "translateY(0px)"
                    })
                }, 1000);

            }, 70 * 1000);

        } else {
            setTimeout(() => {

                $('#home .container .wraper-hinhtron').css({
                    opacity: '0',
                })

                $('#home .container .content').css({
                    display: 'block',
                })

                setTimeout(() => {
                    $('#home .container .content').css({
                        opacity: '1',
                        transform: "translateY(0px)"
                    })
                }, 1000);

            }, 64 * 1000);

        }

    }, []);

    const onClickHinhTron = () => {

    }

    return (
        <div id="home">
            <div className="container">
                <Wrapper>
                    <img className="title" src={Logo} alt="photos"></img>
                    <Text className="txtt" len={content.length} animation={animation} typingTime={content.length * typingTimePerCharacter}>{content}</Text>

                    <div className="wraper-hinhtron">
                        {textArr.map((value, key) => {
                            return (
                                <div key={key} className={`hinhtron ${indexx === key ? 'selectedd' : ''}`} onClick={() => onClickHinhTron(key)}>
                                </div>
                            )
                        })}
                    </div>
                    <div className="content">
                        <p>Our early world was in chaos.
                            Many monster tribes lived on the same continents and oceans.</p>

                        <br></br>

                        <p>They were born from the seeds of both gods and demons, some of them coming from the universe.</p>
                        <br></br>

                        <p>The tribes often war to expand their territory and show their strength and ambition to dominate the world.</p>
                        <br></br>

                        <p>However, tribes now have to join together to increase their strength to fight common enemies - beasts born from the death machines.</p>
                        <br></br>

                        <p>Build your own army of monsters and embark on a journey to liberate the holy land.</p>
                        <br></br>
                    </div>

                </Wrapper>


            </div>

        </div>
    )
}

export default Home
