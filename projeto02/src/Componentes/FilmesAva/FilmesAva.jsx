import React from "react";
import'./FilmesAva.css';

function FilmesAva(props){
    return(
        <div id="princioal">
            <div id="capa-filme">
                <div id="imagem">
                    <img src={props.capa} alt="Capa de filme avaliado"  />
                </div>
                <div id="avaliacao">
                    <h1>{props.nomeF}</h1>
                    <p>{props.comentario}</p>
                </div>

            </div>
        </div>
    )
}

export default FilmesAva