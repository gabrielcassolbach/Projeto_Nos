import React from "react";
import Lupa from './Lupa.svg'

const SearchButton = ({
    onSearch = () => {},
}
) => {
    return(
        <button className = "inputButton"
                onClick = {() => onSearch()} >
            <img id="Lupa_main" src = {Lupa}/>
            Buscar
        </button>
    );
}

export default SearchButton;

