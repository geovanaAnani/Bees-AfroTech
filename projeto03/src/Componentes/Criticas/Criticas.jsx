import React from "react";
import './Criticas.css';

function Criticas(props){
  return(

    
    <>
    
      <div className="criticas">
      <img src={props.srcimg} alt="Filme avaliado" />
      <div class="icones-wrapper">
        <div className="icones">
        
          <span>{props.icone}</span>
          <span>{props.icone}</span>
          <span>{props.icone}</span>
          <span>{props.icone}</span>
          <span>{props.icone}</span>
          </div>
        </div>
        <div className="texto">
       
        <h3>{props.titulo}</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Ratione consequatur incidunt eum reprehenderit ab minus 
             impedit aliquid repudiandae laboriosam nostrum at dolorum,
              totam, maxime deleniti explicabo, voluptates consequuntur
               fugit officiis?</p>
            </div>
      </div>
    </>
  );
}

export default Criticas;
