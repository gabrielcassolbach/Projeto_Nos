import React from 'react';
import Logo from './components/blue_logo.svg'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from './components/Button'

import './styles.css'

const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();


    console.log(location.state.artist);
    console.log(location.state.music);
    console.log(location.state.lyrics);
    
    const goBack = () => { 
        navigate('/search_result', {state:{
            artist: location.state.artist,
            music: location.state.music,
            lyrics: location.state.lyrics
        }});   
    }

    return(
       <main className='result_background'>
            <div className='content_result'>
                <header className='header_result'>
                    <img src = {Logo}/>
                    <a onClick={() => goBack()}
                       className="goBackFromResult"> 
                       Voltar para a busca 
                    </a>
                </header>
                <body className="lyrics_result">
                    <h3>{location.state.music}</h3>
                    <p>{location.state.lyrics}</p>
                    <h2 className="text1_result">
                            Curtiu? Busque mais letras
                    </h2>
                    <Button/>
                </body>
            </div>
       </main>
    );
};

export default Result;