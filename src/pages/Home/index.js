import React, { useState, useEffect } from "react";
import Input from './components/Input'
import SearchButton from "./components/SearchButton";
import { useNavigate } from "react-router-dom";
import SearchService from '../../services/SearchService';
import main_page_logo from './components/main_page_logo.svg';

import './styles.css'

const Home = () => {
    const navigate = useNavigate();
    const [artist, setArtist] = useState('');
    const [music, setMusic] = useState('');

    useEffect(() => {
        let history = localStorage.getItem('@history');
        if(history == null) localStorage.setItem('@history', '[]'); 
    }, [])

    const NewPage = () => {
        SearchService.search(artist, music)
            .then(response => {
                console.log(response);
                if(response.type == 'notfound' || response.type == 'song_notfound'){
                    console.log("Não encontrou a música");
                    navigate('/notfound');
                } else {
                    console.log('Artista: ', response.art.name, '\n Música: ', response.mus[0].name, '\n Letra: ', response.mus[0].text)  
                    navigate('/search_result', {state:{
                        artist: response.art.name,
                        music: response.mus[0].name,
                        lyrics: response.mus[0].text
                    }});
                }
            })
            .catch(error => {
                console.log(error);
            });
    }
  

    const history = () => {
        navigate("/last_search");
    }

    return(
        <main className="background">
            <div className="content">
                <header className="header_main_page">
                    <img src={main_page_logo} />
                    <a onClick={() => {history()}}>Últimas buscas</a>
                </header>
                <body className="body_main_page">
                    <div className="main-content">
                        <div className="Titulo ">
                            Buscar Letra
                        </div>
                        <Input 
                            artist={artist}
                            music={music}
                            setArtist={setArtist}
                            setMusic={setMusic}
                        />
                        <div className="input_button_menu">
                            <SearchButton onSearch={() => NewPage()}/>
                        </div>
                    </div>
                </body>
            </div>
        </main>
    );
}

export default Home;
