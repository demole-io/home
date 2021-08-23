import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import styled from "styled-components";

const CarouselStyled = styled(ReactCarousel)`
    .control-dots {
        .dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            border: 1px solid #ce985e;
            margin: 10px;
            cursor: pointer;
        }

        .selected {
            background: linear-gradient(180deg, #ddae6f 0%, #fff6e7 100%);
        }
    }
`;



export default function Carousel(props) {
    return (
        <CarouselStyled {...props} emulateTouch={true} showStatus={false} autoPlay={true} showThumbs={false} interval={7000} infiniteLoop={true} showArrows={false}>
            {props.children}
        </CarouselStyled>
    )
}
