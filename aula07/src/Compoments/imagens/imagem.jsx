import React from "react";
import './imagem.css';

function Imagem(props){
    return(
        <div id="divImagem">
            <img src={props.Imagem} alt="foto" />
            <h3>{props.texto}</h3>
            <p>{props.texto2}</p>
        
        </div>
    )
}