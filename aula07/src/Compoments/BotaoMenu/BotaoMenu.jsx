import React from "react";
import'./BotaoMenu.css'

function ButtonMenu(props){
    return(
        <button>
            {props.nome}
        </button>
    )

}
  
export default ButtonMenu