import './App.css';
import Header from './Componentes/Header/Header';
import imgUser from './Componentes/Img/img-user.png'
import Line from './Componentes/Line/Line';
import MenuL from './Componentes/MenuL/MenuL';
import { BiHeartSquare } from 'react-icons/bi';
import { BiAddToQueue } from 'react-icons/bi';
import { BsStarHalf  } from 'react-icons/bs';
import { BsFillChatLeftQuoteFill  } from 'react-icons/bs';
import FilmeA from './Componentes/FilmeA/FilmeA';
import FilmeAlice from './Componentes/Img/filme-alice.jpg'
import FilmeBela from './Componentes/Img/filme-bela-fera.jpg'
import FilmeAladim from './Componentes/Img/filmealadim.jpg'
import FilmeFrozen from './Componentes/Img/frozen.webp'
import FilmePoca from './Componentes/Img/pocahontas.jpg'
import FilmeLeao from './Componentes/Img/reileao.jpeg'
import FilmeSereia from './Componentes/Img/Sereia.webp'
import FilmeSininho from './Componentes/Img/Sininho.webp'
import FilmesAva from './Componentes/FilmesAva/FilmesAva';
import {AiFillStar} from 'react-icons/ai';
import {AiOutlineStar} from 'react-icons/ai';



function App() {
  return (
    <div className="App">
      <Header src={imgUser}
        nomeuser="Cauã Reymond"
        assistidos="150 Assistidos"
        vouver="50 Adicionados" />

      <div className='menuEsquerda'>


        <MenuL icone={<BiHeartSquare />} href="#favoritos" bname="Favoritos" />
        <MenuL icone={<BiAddToQueue />} href="#Adicionados" bname="Adicionados" />
        <MenuL icone={<BsStarHalf  />} href="#estante" bname="Avaliados" />
        <MenuL icone={<BsFillChatLeftQuoteFill  />} href="#ultimasAva" bname="Criticas" />

      </div>
      
      <div className='Nomedasess'>
        <h1>Minha Estante de Filmes</h1>
        <Line/>
      </div>
      <div id="estante" className="estante">

        <FilmeA titulo="Alice no pais das ..." srcimg={FilmeAlice} icone={<AiFillStar/>} />
        <FilmeA titulo="A Bela e a Fera" srcimg={FilmeBela} icone={<AiFillStar/>}/>
        <FilmeA titulo="Frozen" srcimg={FilmeFrozen} icone={<AiFillStar/>} />
        <FilmeA titulo="Pocahontas" srcimg={FilmePoca} icone={<AiFillStar/>}/>
        <FilmeA titulo="O Rei Leão" srcimg={FilmeLeao} icone={<AiFillStar/>} />
        <FilmeA titulo="A Pequena Sereia" srcimg={FilmeSereia} icone={<AiOutlineStar/>}/>
      </div>

      <div id='ultimasAva'>
        
        <FilmesAva

          capa={FilmeSininho}
          nomeF="Sininho"
          comentario="Lorem Ipsum is simply dummy text of the printing and typ"

        />

        <FilmesAva

          capa={FilmeAladim}
          nomeF="Aladim"
          comentario="Lorem Ipsum is simply dummy text of the printing and typ."

        />




      </div>


    </div>

  );
}

export default App;
