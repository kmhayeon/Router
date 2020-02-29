import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Aladin from "../Screens/Aladin";
import LionKing from "../Screens/LionKing";
import SpiderMan from "../Screens/SpiderMan";
import Header from "./Header";




export default () => (
    <Router>
        <Header />
        <Route path="/aladin" component={Aladin} />
        <Route path="/lionking" component={LionKing} />
        <Route path="/spiderman" component={SpiderMan} />
    </Router>
)
