import react, {useState} from 'react'
import '../App.js'

export default function Searchs(){
    
    const [artist, setArtist] = useState('Insira o nome do artista');
    const [music, setMusic] = useState('Insira o nome da música');
    
    return(
        <>
            <label className = 'artist'>Artista:</label>
            <input 
                className='artist_input'
                type = "text"
                name = "fnome"
                value = {artist}
                onChange = {(e) => setArtist(e.target.value)}
            />
            
            <label className = 'music'>Música:</label>
            <input 
                className = 'music_input'
                type = "text"
                name = "fnome"
                value = {music}
                onChange = {(e) => setMusic(e.target.value)}
            />
            
        </>
    );
}