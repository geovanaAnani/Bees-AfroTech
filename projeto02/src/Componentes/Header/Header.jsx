import React from "react";
import './Header.css'

function Header(props){
    return(
        <header>
            <img src={props.src} alt="Imagem de perfil" />
            <h3>{props.nomeuser}</h3>
            <div className="texto1">
                <h4>{props.assistidos}</h4>
            </div>
            <div className="texto2">
                <h4>{props.vouver}</h4>
            </div>   
        </header>
    )
}

export default Header