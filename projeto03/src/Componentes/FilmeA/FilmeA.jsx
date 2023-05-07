import React from "react";
import './FilmeA.css';

function FilmeA(props){
  return(

    
    <>
    
      <div className="minhaEstante">
        <h3>{props.titulo}</h3>
        <img src={props.srcimg} alt="Filme avaliado" />
        <div className="icones">
          <span>{props.icone}</span>
          <span>{props.icone}</span>
          <span>{props.icone}</span>
          <span>{props.icone}</span>
          <span>{props.icone}</span>
        </div>
      </div>
    </>
  );
}

export default FilmeA;
