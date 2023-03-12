import React from "react";
import { useNavigate } from "react-router-dom"
import Lupa from './lupa.svg'

import '../styles.css'

const Button = () => {

    const navigate = useNavigate();

    const goToMenu = () => {
        navigate('/')
    }
    
    return (
        <button onClick={() => goToMenu()}
            className="new_search_button_search2">
            <img className="lupa_search2" src={Lupa} />
            <div className="nova_busca_search2">
                Nova Busca
            </div>
        </button>
    );
}

export default Button;