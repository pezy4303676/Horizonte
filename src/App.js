import logo from './logo.svg';
import './App.css';
import Menubar from './components/Menubar';
import menino from './img/menino.png'
import Cursos from './components/Cursos';
import Contact from './components/Contact';
import Login from './components/Login';
import Baixo from './components/Baixo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
 {/*  <Menubar/> */}
<br/>
<div id='menu'>
  <div id='info'>
    <h1>
      Olá aqui você tera novos 
      <br/>
      conhecimentos, Seja bem
      <br/>
       Vindo au<o id='subli' title='Escola Novo Horizonte'> horizonte</o>
    </h1>
    <br/>
<div id='spans'>
  <div>
    ola sdsdadsdsadsas
    <br/>
    dasdsdsads
    <br/>
    ffsdfsdfsdfsfsafs
  </div>
  <div>
    ola sdsdadsdsadsas
    <br/>
    dasdsdsads
    <br/>
    ffsdfsdfsdfsfsafs
  </div>
</div>
<br/>
<br/>
<button id='btn'>Seja menbro</button>
  </div>
  <div id='meni'>
    <img draggable='false' width='400px' src={menino} />
  </div>
</div>
<Cursos/>
<br/>
<br/>
<Login/>
<Contact/>
<br/>
<br/>
<Baixo/>
      </header>
    </div>
  );
}

export default App;
