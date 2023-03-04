import React from "react";
import { useNavigate } from "react-router-dom"
import Lupa from './Lupa.svg'

const SearchButton = () => {

    const navigate = useNavigate();

    const NewPage = () => {
        navigate('/search_result');
    }

    return(
        <button className = "inputButton"
                onClick = {() => NewPage()} >
            Buscar
            <img src = {Lupa}/>
        </button>
    );
}

export default SearchButton;

