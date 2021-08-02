import React from 'react';
// import 'react-redux-toastr/src/styles/index.scss'
import './assets/scss/style.scss';
import Header from './components/Header';
import Home from './controllers/Home';
import $ from 'jquery'
import Characters from './controllers/Characters';
import Roadmap from './controllers/Roadmap';
import Backed from './controllers/Backed';
import Fooder from './components/Fooder';
import Features from './controllers/Features';
import Earn from './controllers/Earn';
import Monster from './controllers/Monster';
import PhoneScreen from './controllers/PhoneScreen';

const width = $("body").width();

const pathname = window.location.pathname
const isMobile = width <= 768 ? true : false

class App extends React.Component {
    render() {
        return (
            <div id="about">
                <Header pathname={pathname} isMobile={isMobile}></Header>
                <Home isMobile={isMobile}></Home>
                <Monster></Monster>
                <PhoneScreen></PhoneScreen>
                <Characters></Characters>
                <Features isMobile={isMobile}></Features>
                <Earn></Earn>
                <Roadmap></Roadmap>
                <Backed></Backed>
                <Fooder></Fooder>
            </div>
        )
    }
}

export default App