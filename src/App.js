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
import Contador from './Components/contador/Contador'
import Carros from './Components/carros/Carros'
import { Button } from 'react-bootstrap';
import Pai from './Components/comunicacao/indireta/Pai';
import Familia from './Components/comunicacao/children/Familia';
import Membro from './Components/comunicacao/children/Membro';
import If from './Components/condicional/If';
import ParImpar from './Components/condicional/ParImpar'
import UsuarioLogado from './Components/condicional/UsuarioLogado';
import CadastroNome from './Components/classe/CadastroNome'
import If from './Components/condicional/If';
import ListaProdutos from './Components/Lista/ListaProdutos';


{/*function App() {
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
}*/}

//export default App;

function App() {
  return (
    <div>
      {/*<Primeiro/>
      <Component1/>
      <Component2/>
      <Estilos/>
      <MinMax min={2} max={10}/>
      <Testebotao label="Comprar"/>
      <Testebotao label="Adicionar ao carrinho"/>
      <Testebotao label="Comprar"/>
      <Titulo principal="olá"></Titulo>
      <Botao/>
      <Contador inicial={100}  passo={10} min={0} max={100}/>
       <ul>
        <Carros modelo="Volvo S60" marca="xxxx" cor="x" ano="2022" portas="4" combustivel="Híbrido" cambio="x" tam_aro="x" potecia="x" azul />
        <Carros modelo="x" marca="x" cor="x" ano="2002 " portas="4" combustivel="Gasolina" cambio="x" tam_aro="xx" potecia="x" verde />
        <Carros modelo="x" marca="x" cor="x" ano="2010 " portas="2" combustivel="Eletricidade" cambio="x" tam_aro="xx" potecia="x" rosa />
      </ul>
      
        <Pai/>
      
         <Familia>
        <Membro nome='Carol' sobrenome='Melo' />
        <Membro nome='Carlos' sobrenome='Melo' />
        <Membro nome='Luiz' sobrenome='Melo' />

      </Familia>


      <Familia>
        <Membro nome='Miguel' sobrenome='Melo' />
        <Membro nome='Noah' sobrenome='Melo' />
        <Membro nome='Princess' sobrenome='Melo' />
      </Familia>

      <UsuaioLogado usuario={{nome: 'Carol', email:'s@gmail.com'}}>

      <ParImpar num={3} />
      <ParImpar num={2} />


      <UsuarioLogado usuario={{ nome: 'Gui', email: 'gui@gui.com'}} />
      <UsuarioLogado usuario={{ nome: 'Ana' }} />
      <UsuarioLogado usuario={{ email: 'carlos@empresa.com'}} />
      <UsuarioLogado usuario={null} />
      <UsuarioLogado usuario={{}} />

      */}







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