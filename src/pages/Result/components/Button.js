import React from "react";
import { useNavigate } from "react-router-dom"
import Lupa from './lupabranca.svg'

import '../styles.css'

const Button = () => {

    const navigate = useNavigate();

    const goToMenu = () => {
        navigate('/')
    }  
    
    return (
        <button onClick={() => goToMenu()}
            className="button_result ">
            <img className="lupa_result" src={Lupa} />
            <div className="nova_busca_result">
                Nova Busca
            </div>
        </button>
    );
}

export default Button;