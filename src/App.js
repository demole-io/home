import React, { Fragment } from 'react';
import About from './About'
import { BrowserRouter as Router, Route } from "react-router-dom";
// import 'react-redux-toastr/src/styles/index.scss'
import './assets/scss/style.scss';
import Summon from './controllers/Summon';
import Comming from './controllers/Comming';

const routes = [
    {
        path: '/summon',
        exact: false,
        main: ({ location, match }) => <Summon match={match}></Summon>
    },
    {
        path: '/comming',
        exact: false,
        main: ({ location, match }) => <Comming match={match}></Comming>
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