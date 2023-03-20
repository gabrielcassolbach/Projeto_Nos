import React, {useEffect} from 'react';
import Logo from './components/blue_logo.svg'
import { useLocation, useNavigate } from 'react-router-dom';
import Button from './components/Button'
import Arrow from './components/arrow.svg'
 
import './styles.css'
 
const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();
    let entered = false;  

    const goBack = () => { 
        navigate('/search_result', {state:{
            artist: location.state.artist,
            music: location.state.music,
            lyrics: location.state.lyrics
        }});   
    }

    useEffect(() => {
        if(!entered){
            entered = true;
            let aux = localStorage.getItem('@history');
            let history = JSON.parse(aux);
            if(history.length >= 10)
                history.shift();
            history.push({
                artist: location.state.artist,
                music: location.state.music,
                lyrics: location.state.lyrics
            });
            localStorage.setItem('@history', JSON.stringify(history));
        }
    }, [])

    return(
       <main className='result_background'>
            <div className='content_result'>
                <header className='header_result'>
                    <img src = {Logo}/>
                    <a onClick={() => goBack()}
                       className="goBackFromResult">
                       <img className="arrow_result" src={Arrow}/>
                        Voltar para a busca 
                    </a>
                </header>
                <body className="lyrics_result">
                    <h3 className="lyrics">{location.state.music}</h3>
                    <p className="lyrics">{location.state.lyrics}</p>
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

