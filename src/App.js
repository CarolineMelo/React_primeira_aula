import logo from './logo.svg';
import './App.css';
import Primeiro from './componets/Primeiro'
import CompPadrao, {Component1, Component2} from './components/Multi.js'

 /*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> Carol save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

//export default App;

function App() {
  return <h1>Primeiro Componente</h1>
}
export default App

//Atribuindo uma variável

//const App = function(){
//  return <h1>Prmeiro Componente</h1>
//}
//export default App

//Função anonima e exportando direto
//export default () => {
//  return <h2>Primeiro Componente</h2>
//}

//Usando arrow function
//export default () => {
//  return<h2>Primeiro Componente</h2>
//}

//Usando arrow function com o return implícito
//export default () => <h2>Primeiro Componente</h2>