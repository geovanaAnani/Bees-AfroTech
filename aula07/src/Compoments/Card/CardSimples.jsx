import React from "react";
import PropTypes from 'prop-types'
import './CardSimples.css'

function CardSimples(props) {
    return (
        <div id="principal">
            <div id="imagem">
                <img src={props.src} alt={props.alt} />
            </div>
            <div id="texto">

                <h3>{props.titulo}</h3>
                <p>{props.texto}</p>
            </div>

        </div>

    )
};

export default CardSimples;