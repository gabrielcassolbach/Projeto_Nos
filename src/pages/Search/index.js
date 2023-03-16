import React, { useEffect } from "react";
import main_page_logo from './components/main_page_logo.svg';
import Button from './components/Button'
import {useLocation, useNavigate} from 'react-router-dom';
 
import './styles.css' 

const Search = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const goToResult = () => { 
        navigate('/result', {state:{
            artist: location.state.artist,
            music: location.state.music,
            lyrics: location.state.lyrics
        }});        
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
                        <button onClick ={() => goToResult()}
                                className="result">
                                <h3 className="artistresult">{location.state.artist}{"\n"}</h3>
                                <p className="musicresult">   {location.state.music}</p>
                        </button>
                        <div className="text2_search1">
                            <p>Não encontrou o que procurava?</p>
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

