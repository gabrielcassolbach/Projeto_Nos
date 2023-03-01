import React from "react";
import input_image from './imgs/Lupa.svg'
import '../App.js'

export default function Input_Button(){
    return(
        <button className="input_button">
            <img className = "input_image_main_page" 
                 src = {input_image}
            />
            <p className = "input_text_main_page">
                Buscar
            </p>
        </button>
    );
}