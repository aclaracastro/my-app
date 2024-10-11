// import logo from './logo.svg';
import React, { Component } from 'react';
import TesteFuncao from './TesteFuncao';
import TesteClasse from './TesteClasse';
import Saudacao from './Saudacao';
import Soma from './Soma';
import ContadorFuncao from './componentes/aula 3/ContadorFuncao';
import ContadorClasse from './componentes/aula 3/ContadorClasse';
import ExibirNomeFuncao from './componentes/aula 3/ExibirNomeFuncao';
import ExibirNomeClasse from './componentes/aula 3/ExibirNomeClasse';
import MudancaCor from './componentes/aula 3/hw/MudancaCor';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  const n1 = 2;
  const n2 = 5;
  const soma = n1 + n2;
  return(
    <div>
      <TesteFuncao></TesteFuncao>
      <TesteClasse></TesteClasse>
      <Saudacao name="ana clara" sobrenome="castro"/>
      <Soma n1={n1} n2={n2} soma={soma}/>
      <ContadorFuncao></ContadorFuncao>
      <ContadorClasse></ContadorClasse>
      <ExibirNomeFuncao></ExibirNomeFuncao>
      <ExibirNomeClasse></ExibirNomeClasse>
      <MudancaCor/>
    </div>
  );
};





export default App;
