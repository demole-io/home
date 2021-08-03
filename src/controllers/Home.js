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
    const textArr = [
        "Our early world was in chaos",
        "Many monster tribes lived on the same continents and oceans",
        "They were born from the seeds of both gods and demons",
        "Some of them coming from the universe",
        "The tribes often war to expand their territory",
        "And show their strength and ambition to dominate the world",
        "However, tribes now have to join together",
        "To increase their strength",
        "To fight common enemies - beasts born from the death machines",
        "Build your own army of monsters and embark on a journey to liberate the holy land"
    ]

    let textArrAnimation = textArr
    const [content, setcontent] = useState("")
    const [animation, setanimation] = useState(false)
    const currentIndex = useRef(0)
    const timeoutArr = useRef([])
    const typingDelay = []

    const typingTimePerCharacter = 0.03

    function calcDelay() {

        let sum = 0;
        textArrAnimation.map((value, key) => {
            typingDelay[key] = sum
            sum += value.length * typingTimePerCharacter + 3
        })
    }

    function setTypingText(index, text, callback) {
        setanimation(false)
        timeoutArr.current[index] = setTimeout(() => {
            if (index === 0) {
                setanimation(true)
                setcontent(text)
                callback()
            } else {
                setanimation(false)
                setTimeout(() => {
                    setanimation(true)
                    setcontent(text)
                    callback()
                }, 3000)
            }
        }, index === 0 ? 0 : (typingDelay[index] + 3) * 1000)
    }

    function clearAllTimeout() {
        timeoutArr.current.map(value => (
            clearTimeout(value)
        ))
    }

    function runAnimation(startIndex) {
        textArrAnimation = textArr
        textArrAnimation.splice(0, startIndex)
        currentIndex.current = startIndex

        calcDelay()
        clearAllTimeout()
        textArrAnimation.map((value, key) => (
            setTypingText(key, value, () => {
                currentIndex.current++
            })
        ))
    }

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

        setTimeout(() => {
            runAnimation(0)
        }, 6000)
    }, []);

    const onClickHinhTron = (index) => {
        runAnimation(index)
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
                                <div key={key} className={`hinhtron ${currentIndex.current === key ? 'selectedd' : ''}`} onClick={() => onClickHinhTron(key)}>
                                </div>
                            )
                        })}
                    </div>
                </Wrapper>
            </div>

        </div>
    )
}

export default Home
