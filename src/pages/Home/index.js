import React from "react";
import Input from './components/Input'
import SearchButton from "./components/SearchButton";
import main_page_logo from './components/main_page_logo.svg';

import './styles.css'

const Home = () => {
    return(
        <main className="background">
            <div className="content">
                <header className="header_main_page">
                    <img src={main_page_logo} />
                    <a href="http://google.com">Últimas buscas</a>
                </header>
                <body className="body_main_page">
                    <div className="main-content">
                        <div className="Titulo ">
                            Buscar Letra
                        </div>
                        <Input/>
                        <div className="height_search_button_main_page">
                            <SearchButton/>
                        </div>
                    </div>
                </body>
            </div>
        </main>
    );
}

export default Home;