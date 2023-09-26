import React, { useState } from 'react';
import Inicio from './componentes/inicio'
import Dados from './componentes/dados'
import Login from './componentes/login'
import Token from './componentes/inicio/token'

function App() {
  const [mostrarComponentes, setMostrarComponentes] = useState(true);

  const esconderComponentes = () => {
    setMostrarComponentes(false)
  }

  let componentes
  if (mostrarComponentes) {
    componentes = (
      <>
        <Inicio esconderComponentes={esconderComponentes}/>
        <Dados nome="Joao" conta="7300826"/>
        <Login/>
      </>
    );
  } else {
    componentes = (
      <>
        <Token/>
      </>
    )
  }

  return (
    <div className='bg-blue-900 h-screen'>
      {componentes}
    </div>
  );
}

export default App
