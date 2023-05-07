import React from "react";
import Criticas from "../Criticas/Criticas";
import { AiFillStar } from 'react-icons/ai';
import FilmeAlice from '../Img/filme-alice.jpg'

function EstanteC(){
    return(
<div id="Criticas" className="Criticas">

<Criticas titulo="Alice no pais das Maravilhas" srcimg={FilmeAlice} icone={<AiFillStar/>} />

</div>)
}

export default EstanteC;