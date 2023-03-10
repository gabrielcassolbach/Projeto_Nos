import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Search from '../pages/Search'
import Last_Search from '../pages/Last_Search'

const Navigation = () => {
    return(
        <Router>
            <Routes>
                <Route element = {<Home/>} path = "/"/>
                <Route element = {<Search/>} path = "/search_result"/>
                <Route element = {<Last_Search/>} path = "/last_search"/>
            </Routes>
        </Router>
    );
};

export default Navigation;