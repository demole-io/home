import React, { Fragment } from 'react';
import About from './About'
import { BrowserRouter as Router, Route } from "react-router-dom";
// import 'react-redux-toastr/src/styles/index.scss'
import './assets/scss/style.scss';
import Summon from './controllers/Summon';
import Faq from './controllers/Faq';
import Marketplace from './controllers/Marketplace';
import MonterDetail from './controllers/MonterDetail';
import OurTeam from './controllers/OurTeam';

const routes = [
    {
        path: '/our-team',
        exact: false,
        main: ({ location, match }) => <OurTeam></OurTeam>
    },
    {
        path: '/monster-detail/:index',
        exact: false,
        main: ({ location, match }) => <MonterDetail match={match} location={location}></MonterDetail>
    },
    {
        path: '/marketplace',
        exact: false,
        main: ({ location, match }) => <Marketplace match={match} location={location}></Marketplace>
    },
    {
        path: '/summon',
        exact: false,
        main: ({ location, match }) => <Summon match={match}></Summon>
    },
    {
        path: '/faq',
        exact: false,
        main: ({ location, match }) => <Faq match={match}></Faq>
    },
    {
        path: '/',
        exact: true,
        main: ({ location, match }) => <About match={match} />
    },
];

class App extends React.Component {
    render() {
        return (
            <Fragment>
                <Router>
                    {routes.map((route, index) => {
                        return <Route key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.main} />
                    })}
                </Router>
            </Fragment>
        )
    }
}


export default App