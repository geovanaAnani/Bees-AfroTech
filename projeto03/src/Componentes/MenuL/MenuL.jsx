import React from "react";
import './MenuL.css'
import { Link } from 'react-router-dom';

function MenuL(props) {
  return (
    <div id="conteiner">
      <ul>
        <li>
          <Link className="botao" to={props.to}>
            <i className="icon">{props.icone}</i>
            {props.bname}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuL;