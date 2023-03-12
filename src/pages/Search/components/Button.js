import React from "react";
import { useNavigate } from "react-router-dom"
import Lupa from './Lupa.svg'

import '../styles.css'

const Button = () => {

    const navigate = useNavigate();

    const goToMenu = () => {
        navigate('/')
    }
    
    return (
        <button onClick={() => goToMenu()}
            className="new_search_button_search1">
            <img className="lupa_search1" src={Lupa} />
            <div className="nova_busca_search1">
                Nova Busca
            </div>
        </button>
    );
}

export default Button;