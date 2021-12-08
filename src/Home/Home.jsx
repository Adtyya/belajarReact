import React from 'react';
import HelloComp from '../components/Comp/HelloComp';
import Market from '../market/Market';
import Lifecyclecomp from '../lifecycle/LifeCycleComp';
import Post from '../blogPost/Post';
import { BrowserRouter as router, Route, Link, BrowserRouter } from 'react-router-dom';
import { Fragment } from 'react';

const Home = () => {
    return (
        <Router>
            <Fragment>
                <Route path="/" component={Post} />
                <Route path="/product" component={Market} />
                <Route path="/lifecyclecomp" component={Lifecyclecomp} />
            </Fragment>
        </Router>
    );
}

export default Home;
