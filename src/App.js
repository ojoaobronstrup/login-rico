import Inicio from './componentes/inicio'
import Dados from './componentes/dados'
import Login from './componentes/login'

function App() {
  return (
    <div className='bg-blue-900'>
      <Inicio/>
      <Dados nome="Joao" conta="7300826"/>
      <Login/>
    </div>
  );
}

export default App;
