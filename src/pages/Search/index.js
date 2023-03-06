import React from "react";
import { useNavigate } from "react-router-dom"
import main_page_logo from './components/main_page_logo.svg';
import Lupa from './components/Lupa.svg'

import './styles.css'

/* Analisar a responsividade da página -> não está ocorrendo, não sei porque.*/ 
/* Será, primeiramente, implementado a página de busca de quando o artista encontrou a música. */
/* Analisar a criação de um componente para o botão. -> desacoplamento */ 

const Search = () => {
    const navigate = useNavigate();

    const goToMenu = () => {
        navigate('/')
    }

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
                            <button onClick={() => goToMenu()}
                                    className="new_search_button_search1">
                                <img className="lupa_search1" src={Lupa} />
                                <div className="nova_busca_search1">
                                    Nova Busca
                                </div>
                            </button>
                        </div>
                    </div>
                </body>
            </div>
        </main>
    );
}

export default Search;

