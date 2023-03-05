import React from "react";
import Logo from './components/Logo'
import Input from './components/Input'
import MainTitle from "./components/MainTitle";
import SearchButton from "./components/SearchButton";
import LastSearchButton from "./components/LastSearchButton";
import main_page_logo from './components/main_page_logo.svg';

import './styles.css'

const Home = () => {
    return(
        <main className="background">
            <div className="content">
                <header>
                    <img src={main_page_logo} />
                    <a href="http://google.com">Últimas buscas</a>
                </header>
                <body>
                    <div className="main-content">
                        <div className="Titulo ">
                            Buscar Letra
                        </div>
                        <Input/>
                        <SearchButton/>
                    </div>
                </body>
            </div>
        </main>
    );
}

export default Home;