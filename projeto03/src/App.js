import React from 'react';
import './App.css';
import Header from './Componentes/Header/Header';
import imgUser from './Componentes/Img/img-user.png'
import Line from './Componentes/Line/Line';
import MenuL from './Componentes/MenuL/MenuL';
import { BiHeartSquare } from 'react-icons/bi';
import { BiAddToQueue } from 'react-icons/bi';
import { BsStarHalf } from 'react-icons/bs';
import { BsFillChatLeftQuoteFill } from 'react-icons/bs';
import FilmeAladim from './Componentes/Img/filmealadim.jpg'
import FilmeSininho from './Componentes/Img/Sininho.webp'
import FilmesAva from './Componentes/FilmesAva/FilmesAva';
import Estante from './Componentes/Estante/Estante';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import EstanteC from './Componentes/EstanteC/EstanteC';


function App() {
  return (

    <div className="App">
      <Router>
        <Header src={imgUser}
          nomeuser="Cauã Reymond"
          assistidos="150 Assistidos"
          vouver="50 Adicionados" />

        <div className='menuEsquerda'>


          <MenuL icone={<BiHeartSquare />} to="/favoritos" bname="Favoritos" />
          <MenuL icone={<BiAddToQueue />} to="/adicionados" bname="Adicionados" />
          <MenuL icone={<BsStarHalf />} to="/avaliados" bname="Avaliados" />
          <MenuL icone={<BsFillChatLeftQuoteFill />} to="/criticas" bname="Criticas" />

        </div>


        <div className="Nomedasess">
          <h1>Minha Estante de Filmes</h1>
          <Line />
        </div>
        <Routes>


          <Route path="/avaliados" element={<Estante />} />
          <Route path="/criticas" element={<EstanteC />} />

        </Routes>

        <div id="ultimasAva">
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


      </Router>
    </div>

  );
}

export default App;
