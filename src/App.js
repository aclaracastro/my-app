// import logo from './logo.svg';
import React, { Component } from 'react';
import TesteFuncao from './TesteFuncao';
import TesteClasse from './TesteClasse';
import Saudacao from './Saudacao';
import Soma from './Soma';
import ContadorFuncao from './componentes/ContadorFuncao';
import ContadorClasse from './componentes/ContadorClasse';
import ExibirNomeFuncao from './componentes/ExibirNomeFuncao';
import ExibirNomeClasse from './componentes/ExibirNomeClasse';


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
    </div>
  );
};





export default App;
