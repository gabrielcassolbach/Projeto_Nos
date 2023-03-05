import React from "react";
import Logo from './components/Logo'
import Input from './components/Input'
import MainTitle from "./components/MainTitle";
import SearchButton from "./components/SearchButton";
import LastSearchButton from "./components/LastSearchButton";

import './styles.css'

const Home = () => {
    return(
        <body className="background"> 
           <Logo/>
           <MainTitle/>
           <Input/>
           <SearchButton/>
           <LastSearchButton/>
        </body>
    );
}

export default Home;