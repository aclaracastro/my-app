// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom';
import StyledCard from './componentes/aula 9/StyledCard';
import StdButton from './componentes/aula 9/StdButton';
import CardTeste from './componentes/aula 9/CardTeste';
import ContagemPai from './componentes/aula 4/hw/ContagemPai';


const App = () => {
  return(
    <>
      {/* <StdButton/>
      <StyledCard/> */}
      {/* <CardTeste/> */}
      <ContagemPai/>
    </>
  );
}


export default App;
