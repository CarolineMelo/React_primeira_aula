import logo from './logo.svg';
import './App.css';
import Primeiro from './Components/Primeiro'
import CompPadrao, { Component1, Component2 } from './Components/Multi'
import { Component } from 'react';
import Estilos from './Components/estilos/Estilos'
import MinMax from './Components/MinMax'
import Testebotao from './Components/testebotao/Botao'
import Titulo from './Components/Titulo'
import Botao from './Components/Botao'

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
  return (
    <div>
      <Primeiro/>
      <Component1/>
      <Component2/>
      <Estilos/>
      <MinMax min={2} max={10}/>
      <Testebotao label="Comprar"/>
      <Testebotao label="Adicionar ao carrinho"/>
      <Testebotao label="Comprar"/>
      <Titulo principal="olá"></Titulo>
      <Botao/>
    </div>
  );
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