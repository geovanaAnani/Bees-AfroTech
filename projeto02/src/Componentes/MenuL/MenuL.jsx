import React from "react";
import './MenuL.css'


function MenuL(props) {
      return (
            <div id="conteiner">

                  <ul>

                        <li> <a className="botao"  href={props.href}><i className="icon">{props.icone}</i>{props.bname}</a></li>
                       


                  </ul>
            

            </div>

      )
}

export default MenuL