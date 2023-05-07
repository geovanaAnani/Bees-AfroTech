import React, { useState } from "react";
import "./Header.css";

function Header(){
    const [titulo, setTitulo] = useState('Geovana Linda');
    const [classe, setClasse] = useState('light');

    function handleClick(){
        setTitulo("Geovana Maravilhosa")

    }

    function handleClickDarkMode(){
        if (classe ==="dark")
           setClasse("light")
        else
            setClasse("dark")
    }

    return(
        <div className={classe}>
            <span>{titulo}</span>
            <button onClick={handleClick}>Mude o titulo</button>
            <button onClick={handleClickDarkMode}>Dark Mode</button>
        </div>
    );
}
export default Header;