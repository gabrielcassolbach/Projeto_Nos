import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';

/*
- Importar o componente Link que possui um atributo "to" e a direção para 
  a nova Url.

*/

const Navigation = () => {
    return(
        <Router>
            <Routes>
                <Route element = {<Home/>} path = "/"/>

            </Routes>
        </Router>
    );
};

export default Navigation;