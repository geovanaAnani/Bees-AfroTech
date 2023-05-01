import React from 'react';
import './App.css';
import ButtonMenu from './Compoments/BotaoMenu/BotaoMenu';
import CardSimples from './Compoments/Card/CardSimples';
import Fotos from './sobre.png'

function App() {
  return (
    <div className="App">
   <ButtonMenu nome= "Home"></ButtonMenu>
   <ButtonMenu nome= "Sobre"></ButtonMenu>
   <ButtonMenu nome= "ABA"></ButtonMenu>
   
   <CardSimples 
   br
   src = {Fotos}
   alt="blabla"
   titulo= "Funciona pelo amor de Deus"
   texto= "bomfinbindidfnidngindnfksnknd sfidsnidnfs fndifn asfiiasnfjd dvidnf dg ksfsogdnd"
    ></CardSimples>


</div>
  
  )};

export default App;
