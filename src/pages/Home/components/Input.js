import React from 'react'

const Input = () => {
    return(
        <>
            <h1 className = "Artista" >Artista</h1>
            <input placeholder="Insira o nome do artista" 
                   className = "Input_Artista" />
            <h1 className = "Musica"  >Música</h1>
            <input placeholder="Insira o nome da Música" 
                   className = "Input_Musica" />
        </>
    );

}

export default Input;