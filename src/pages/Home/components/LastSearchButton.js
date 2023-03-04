import React from "react";
import { useNavigate } from "react-router-dom"

const LastSearchButton = () => {
    
    const navigate = useNavigate();

    const NewPage = () => {
        navigate('/last_search');
    }

    return(
        <button onClick = {() => NewPage()} 
                className = "LastSearchFormatation">
            Últimas Buscas
        </button>
    );
}

export default LastSearchButton;

