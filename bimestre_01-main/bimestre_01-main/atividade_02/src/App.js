import logo from './logo.svg';
import './App.css';
import Evento from './components/Evento';
import Ingresso from './components/Ingresso';

function App() {
  return (
    <div className="App">
      <Evento nome='Gustavo Lima' data='2 de agosto de 2019 (Sexta-Feira)' horario='18h30 - 00h00' local='Parque do povo' cidade='Campina Grande/PR' genero='Arte em forma de Sertanejo' />
      <Ingresso ingresso='Ingressos' camarote1='R$150,00' camarote2='R$100,00' front='R$60,00' pista='R$30,00' />
    </div>
  );
}

export default App;
