// import logo from './logo.svg';
import React, { Component } from 'react';
import TesteFuncao from './TesteFuncao';
import TesteClasse from './TesteClasse';
import Saudacao from './Saudacao';


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
  return(
    <div>
      <TesteFuncao></TesteFuncao>
      <TesteClasse></TesteClasse>
      <Saudacao name="ana clara" sobrenome="castro"/>
    </div>
  );
};





export default App;
