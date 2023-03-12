import React from "react";
import main_page_logo from './components/main_page_logo.svg';
import Button from './components/Button'

import './styles.css' 

const Search = () => {
    return (
        <main className="background_search1">
            <div className="content_search1">
                <header className="logo_search1">
                    <img src={main_page_logo} />
                </header>
                <body className="search1_body">
                    <div className="main_content_search1">
                        <div className="text1_search1">
                            Letra encontrada
                        </div>
                        <div className="text2_search1">
                            Não encontrou o
                            que procurava?
                        </div>
                        <div className="height_button_search1">
                            <Button/>
                        </div>
                    </div>
                </body>
            </div>
        </main>
    );
}

export default Search;

