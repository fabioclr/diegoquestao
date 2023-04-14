import './App.css';
import TabelaDados from './table/tabeladois'


function App() {
  const data = [
    {nome: 'Fabio', endereco:'Rua 1', cidade:'itape'},
    {nome: 'Lucas', endereco:'Rua 2', cidade:'meio do mato'},
    {nome: 'Robertinho', endereco:'Rua 3', cidade:'chefe do role'}
  ]
  return(
    <div>
      <TabelaDados data={data}> </TabelaDados>
    </div>
  )
}

export default App;
