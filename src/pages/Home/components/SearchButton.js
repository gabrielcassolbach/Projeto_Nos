import React from "react";
import { useNavigate } from "react-router-dom"
import Lupa from './Lupa.svg'
import SearchService from '../../../services/SearchService';

const SearchButton = () => {

    const navigate = useNavigate();

    const NewPage = async () => {
        const artist = 'Coldplay';
        const music = 'Viva la vida';
        SearchService.search(artist, music)
            .then(response => {
                console.log(response);
                console.log('Artista: ', response.art.name, '\n Música: ', response.mus[0].name, '\n Letra: ', response.mus[0].text)   
                console.log((response.type == 'notfound' || response.type == 'song_notfound') ? 'Error' : 'Ok');
                (response.type == 'notfound' || response.type == 'song_notfound') ? 
                    navigate('/last_search') :
                    navigate('/search_result');
            })
            .catch(error => {

            });
    }
  
    return(

        <button className = "inputButton"
                onClick = {() => NewPage()} >
            <img id="Lupa_main" src = {Lupa}/>
            Buscar
        </button>
    );
}

export default SearchButton;

