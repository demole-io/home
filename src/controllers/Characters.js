import React, { useState, useEffect, useRef } from 'react'
import ArrowLeft from '../assets/img/Frame1.png'
import ArrowRight from '../assets/img/Frame.png'
import Unknow1 from '../assets/img/Subtract.png'
import Knight from '../assets/img/rong 2.png'
import ORC from '../assets/img/Orc2.png'
import WARRIOR from '../assets/img/Tiennu.png'
import MEMALD from '../assets/img/nguoica.png'
import Unknow2 from '../assets/img/Subtract1.png'
import Cirke from '../assets/img/Ellipse 15.png'
import Unknow3 from '../assets/img/Frame 77.png'

const Characters = props => {
    const [didMount, setDidMount] = useState(false)
    const [data, setdata] = useState([
        {
            name: 'knight',
            img: Knight,
            des: 'Sinh sống ở các hang đá trên vách núi cao phía bắc vùng lục địa, tộc Rồng là bộ tộc dũng mãnh với đôi cánh dang rộng trên bầu trời, thân hình lực lưỡng cùng những chiếc móng sắc nhọn. Rồng còn có những chiếc vảy cứng chắc như một bộ giáp bảo vệ thân thể. Với lợi thế bay lượn trên cao, tộc rồng tỏ ra ưu thế trong những cuộc đi săn đơn lẻ.'
        },
        {
            name: 'ORC',
            img: ORC,
            des: 'Những cánh rừng già âm u dưới chân các vách núi cao phía bắc vùng lục địa là nơi cư ngụ của tộc Người cây. Lãnh thổ của họ gần như bất khả xâm phạm bởi sự âm u tăm tối rất đáng sợ. Người cây được sinh ra từ những thân cây cổ thụ ngàn năm nên cơ thể săn chắc, di chuyển mềm mại, đặc biệt nguy hiểm trong những trận chiến đồng đội.'
        },
        {
            name: 'WARRIOR',
            img: WARRIOR,
            des: 'Nơi Bắc cực xa xôi quanh năm lạnh giá là nhà của tộc Thiên Sứ. Họ được sinh ra từ những linh hồn thánh thiện. Các thành viên của bộ tộc Thiên Sứ khi trưởng thành sẽ tỏa đi khắp mọi nơi, liên kết với nhiều bộ tộc khác nhau để giúp họ chiến đấu. Tộc Thiên Sứ nổi tiếng là bộ tộc không có kẻ thù'
        },
        {
            name: 'MEMALD',
            img: MEMALD,
            des: 'Chiếm lĩnh toàn bộ đại dương, Tộc Người cá từ lâu đã nuôi tham vọng thống trị vùng lục địa. Làm chủ biển cả bao la, tộc Người cá đặc biệt mạnh trong các cuộc chiến dưới nước. Họ thường xuyên đưa quân men các dòng sông tập kích vào vùng Trung địa và xâm nhập các mê cung để cướp tài nguyên.'
        }
    ])

    const selected = useRef(0)
    const [indexx, setindexx] = useState(0)
    const [interval, setinterval] = useState(false)

    useEffect(() => {
        if (didMount) {
            console.log("Did Update");
        } else {
            setDidMount(true);
            console.log("Did mount");

            autoNext()

            // setInterval(() => {
            //     selected.current = selected.current === data.length - 1 ? 0 : selected.current + 1;
            //     setindexx(selected.current)
            // }, 1000);
        }
    });

    const autoNext = () => {
        setinterval(
            setInterval(() => {
                selected.current = selected.current === data.length - 1 ? 0 : selected.current + 1;
                setindexx(selected.current)
            }, 1000)
        )
    }

    const stopNext = () => {
        clearInterval(interval)
        setinterval(false)
    }

    const onClickLeft = () => {
        if (interval) {
            stopNext()
        }
        selected.current = selected.current === 0 ? data.length - 1 : selected.current - 1;
        setindexx(selected.current)
    }

    const onCliclRight = () => {
        if (interval) {
            stopNext()
        }

        selected.current = selected.current === data.length - 1 ? 0 : selected.current + 1;
        setindexx(selected.current)
    }
    return (
        <div id="characters">
            <div className="container">
                <div className="waper-title">
                    <p className="title">Characters</p>
                    <p className="big-title">Characters</p>
                </div>

                <div className="content">
                    <img className="arrow" src={ArrowLeft} alt="photos" onClick={onClickLeft}></img>

                    <div className="waper-name">
                        <img className="hmm" src={Unknow1} alt="photos"></img>
                        <div>
                            <p className={` ${selected.current === 0 ? 'selected' : ''}`} style={{ marginLeft: '60px' }}>{data[0].name}</p>
                            <p className={` ${selected.current === 1 ? 'selected' : ''}`} style={{ marginLeft: '40px' }}>{data[1].name}</p>
                            <p className={` ${selected.current === 2 ? 'selected' : ''}`} style={{ marginLeft: '20px' }}>{data[2].name}</p>
                            <p className={` ${selected.current === 3 ? 'selected' : ''}`} style={{ marginLeft: '50px' }}>{data[3].name}</p>
                        </div>
                    </div>

                    <img className="Character" src={data[selected.current].img} alt="photos"></img>

                    <div className="group2">
                        <img className="hmmm" src={Unknow2} alt="photos"></img>
                        <div>
                            <img src={Cirke} alt="photos"></img>
                            <p>Faraland are exquisitely digital collectibles created using blockchain technology.</p>
                            <img src={Unknow3} alt="photos"></img>
                        </div>
                    </div>

                    <div className="somee"></div>

                    <img className="arrow" src={ArrowRight} alt="photos" onClick={onCliclRight}></img>
                </div>

                <div className="des">
                    <p className="name">{data[selected.current].name}</p>
                    <p className="txtt">{data[selected.current].des}</p>
                </div>

                <div className="group2-mobie">
                    <div>
                        <p className="name">{data[selected.current].name}</p>
                        <p className="txtt">{data[selected.current].des}</p>
                    </div>
                    <img src={Unknow3} alt="photos"></img>
                </div>
            </div>
        </div>
    )
}

export default Characters