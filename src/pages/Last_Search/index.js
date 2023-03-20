import React, {useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Logo from './components/logo.svg'
import Button from './components/Button'
import './styles.css'
 
const Last_Search = () => {
    const location = useLocation();
    const [musics, setMusics] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let aux = localStorage.getItem('@history');
        let history = JSON.parse(aux);
        setMusics(history.reverse());
    }, [])

    const goToResult = (artist, music, lyrics) => {
        navigate('/result', {state:{
            artist,
            music,
            lyrics
        }});   
    }

    const clearHistory = () => {
        let history = localStorage.getItem('@history');
        localStorage.clear();
        setMusics([]);
        localStorage.setItem('@history', '[]'); 
    }
 

    return(
       <main className="background_history">
            <div className="content_history">
                <header className="header_history">
                    <img src={Logo}/>
                    <a onClick={() => clearHistory()}
                       className="clear_history">Limpar Histórico X</a>
                </header>
                <body>
                    <h1 className="title_history"> Histórico </h1>
                    {musics.length > 0 ?
                        musics.map((info) => (
                            <div className="music_history">
                                <button className="button_info_history"
                                    onClick = {() => goToResult(info.artist, info.music, info.lyrics)}>
                                    {info.artist}{'-'}{info.music}
                                </button>
                            </div>
                        ))
                    :
                        <div className="empty_history">
                            <p>Nenhuma música no Histórico</p>
                        </div>
                    }
                    <Button/>
                </body>
            </div>
       </main>
    );
}

export default Last_Search;
