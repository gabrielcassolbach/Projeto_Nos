import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom"

import './styles.css'

const Last_Search = () => {

    const [musics, setMusics] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        let aux = localStorage.getItem('@history');
        let history = JSON.parse(aux);
        setMusics(history);
    }, [])

    return(
       <main>
            <div>
                <header>
                    <p> HEADER MUST BE PLACED IN HERE </p>
                </header>
                <body>
                    <h1> Histórico </h1>
                </body>
                {musics.map((info) => (
                    <div>
                        <h1>{info.artist}</h1>
                        <p>{info.music}</p>
                    </div>
                ))}
            </div>
       </main>
    );
}

export default Last_Search;


