import React, { useEffect, useRef, useState } from 'react'
import Logo from '../assets/img/logo02 1.png'
import $ from 'jquery'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 80vh;
`;


const Home = props => {
    const textArr = [
        "Our early world was in chaos. Many monster tribes lived on the same continents and oceans.",
        "They were born from the seeds of both gods and demons, some of them coming from the universe.",
        "The tribes often war to expand their territory and show their strength and ambition to dominate the world.",
        "However, tribes now have to join together to increase their strength to fight common enemies - beasts born from the death machines.",
        "Build your own army of monsters and embark on a journey to liberate the holy land.",
    ]


    const timeoutArr = useRef([])
    const [indexx, setindexx] = useState(0)

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

        runText(0, 6000)
        setTimeout(() => {
            $('#home .container .wraper-hinhtron').css({
                opacity: '1',
            })
        }, 6000);
    }, []);

    const runText = (j, time) => {
        for (let i = j; i < 5; i++) {
            timeoutArr.current[i] = setTimeout(() => {
                setindexx(i)
                $(`#home .container .txt${i}`).css({
                    opacity: '1',
                    transform: "translateY(0px)"
                })

                if (i < 4) {
                    setTimeout(() => {
                        $(`#home .container .txt${i}`).css({
                            opacity: '0',
                            transform: "translateY(-50px)"
                        })
                    }, 6000);
                }
            }, time);
            time = time + 7000;
        }
    }

    const clearText = () => {
        timeoutArr.current.map(value => (
            clearTimeout(value)
        ))

        $(`#home .container .txt`).css({
            opacity: '0',
            transform: "translateY(50px)"
        })
    }

    const onClickHinhTron = (index) => {
        clearText()
        setTimeout(() => {
            runText(index, 0)
        }, 1000);
    }

    return (
        <div id="home">
            <div className="container">
                <Wrapper>
                    <img className="title" src={Logo} alt="photos"></img>
                    {textArr.map((value, index) => {
                        return <p className={`txt txt${index}`}>{value}</p>
                    })}
                    <div className="wraper-hinhtron">
                        {textArr.map((value, key) => {
                            return (
                                <div key={key} className={`hinhtron ${indexx === key ? 'selectedd' : ''}`} onClick={() => onClickHinhTron(key)}>
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
