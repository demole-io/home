import React, { useState } from 'react'
import Header from '../components/Header'

export default function Faq() {
    const [data, setdata] = useState([
        {
            title: 'Welcome to SushiSwap',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
        },
        {
            title: 'Dev Docs',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
        },
        {
            title: 'Dev Docs',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
        },
        {
            title: 'Dev Docs',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. '
        },
    ])
    const [selected, setselected] = useState(0)

    const onToggleTable = (index) => {
        let detail = data
        detail[index].showDetail = !detail[index].showDetail
        setdata([...detail])
    }

    const renderChild = (value, index) => {
        return (
            <div className="waper-child">
                <div className="child" onClick={() => onToggleTable(index)}>
                    <p>{value.title}</p>
                    <p>^</p>
                </div>

                {value.showDetail && <div className="child-detail">
                    <p>{value.content}</p>
                </div>}

            </div>
        )
    }

    return (

        <div id="faq">
            <Header></Header>
            <div className="container faqq">
                <div className="left">
                    {data.map((value, index) => {
                        return <p className={`${index === selected ? 'selected' : ''}`} onClick={() => setselected(index)}>{value.title}</p>
                    })}

                </div>

                <div className="right">
                    <p className="title">Welcome to SushiSwap</p>
                    <p className="text1">{data[selected].title}</p>
                    <p className="text2">{data[selected].content}</p>

                </div>
            </div>

            <div className="container is-mobile">
                <p className="title">FAQ</p>

                <div>
                    {data.map((value, index) => {
                        return renderChild(value, index)
                    })}
                </div>
            </div>


        </div>
    )
}
