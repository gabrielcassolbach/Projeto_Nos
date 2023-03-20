import React from "react";
import Button from './components/Button'
import Logo from './components/logo.svg'
import Menina from './components/menina.svg'

import './styles.css' 
 
const NotFoundSearch = () => {
    return(
        <main className="background_search2">
            <div className="content_search2">
                <header>
                    <img className="img1" src={Logo}/>
                    <h1  className="text1"> 
                        Letra não encontrada 
                    </h1>
                    <img className="img2" src={Menina}/>
                </header>
                <body>
                    <div className="text2">
                        Essa múśica ainda não foi escrita, mas não fique triste,
                        você pode acessar milhares de músicas realizando uma nova
                        busca.
                    </div>
                    <Button/>
                </body>
            </div>
        </main>
    );
}

export default NotFoundSearch;