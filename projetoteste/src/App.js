import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route, Links} from "react-router-dom"

function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => setDados(data))
  }, []);

  return (
    <div>
      <h1>Lista de tarefas</h1>
      <ul>
        {dados.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
