import React from 'react'
import yellow_logo from './imgs/Logo laranja.svg'
import '../App.js'

export default function Logo(){
    return (
        <div className = "logo_image">
            <img src = {yellow_logo}/>
        </div>
    )
}