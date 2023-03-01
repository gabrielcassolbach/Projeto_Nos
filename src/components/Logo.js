import React from 'react'
import yellow_logo from './imgs/Logo laranja.svg'
import '../App.js'

/* | Pedir para o linke como alinhar as imagens de modo apropriado | */

export default function Logo(){
    return (
        <div className = "logo_image">
            <img src = {yellow_logo}/>
        </div>
    )
}