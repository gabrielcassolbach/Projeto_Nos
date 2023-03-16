import React, { useState } from 'react'

const Input = ({
    artist,
    music,
    setArtist = () => {},
    setMusic = () => {},
}) => {
    return(
        <>
            <h1 className = "Artista" >Artista</h1>
            <input 
                placeholder="Insira o nome do artista" 
                className="Input_Artista"
                value={artist}
                onChange={(event) => setArtist(event.target.value)}
            />
            <h1 className = "Musica"  >Música</h1>
            <input 
                placeholder="Insira o nome da Música" 
                className = "Input_Musica" 
                value={music}
                onChange={(event) => setMusic(event.target.value)}
            />
        </>
    );

}

export default Input;