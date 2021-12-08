import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Market from '../market/Market';
import Post from '../blogPost/Post';
import Lifecyclecomp from '../lifecycle/LifeCycleComp';

class Homes extends Component {
    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <ul>
                            <li>
                                <Link to="/">Post</Link>
                            </li>
                            <li>
                                <Link to="/market">Market</Link>
                            </li>
                            <li>
                                <Link to="/life">LifeCycle</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Post/>}/>
                        <Route path="/market" exact element={<Market/>}/>
                        <Route path="/life" element={<Lifecyclecomp/>}/>
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default Homes;
