import React from "react"
import FilmeA from "../FilmeA/FilmeA"
import FilmeAlice from '../Img/filme-alice.jpg'
import FilmeBela from '../Img/filme-bela-fera.jpg'
import FilmeFrozen from '../Img/frozen.webp'
import FilmePoca from '../Img/pocahontas.jpg'
import FilmeLeao from '../Img/reileao.jpeg'
import FilmeSereia from '../Img/Sereia.webp'
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';

function Estante(){
    return(
<div id="estante" className="estante">

<FilmeA titulo="Alice no pais das ..." srcimg={FilmeAlice} icone={<AiFillStar/>} />
<FilmeA titulo="A Bela e a Fera" srcimg={FilmeBela} icone={<AiFillStar/>}/>
<FilmeA titulo="Frozen" srcimg={FilmeFrozen} icone={<AiFillStar/>} />
<FilmeA titulo="Pocahontas" srcimg={FilmePoca} icone={<AiFillStar/>}/>
<FilmeA titulo="O Rei Leão" srcimg={FilmeLeao} icone={<AiFillStar/>} />
<FilmeA titulo="A Pequena Sereia" srcimg={FilmeSereia} icone={<AiOutlineStar/>}/>
</div>)
}

export default Estante;