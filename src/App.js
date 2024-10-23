// import logo from './logo.svg';
import React, { Component } from 'react';
import InputComponente from './componentes/aula 6/InputComponente';
import FormularioPai from './componentes/aula 6/FormularioPai';
import Formulario from './componentes/aula 6/Formulario';
import FormularioComValidacao from './componentes/aula 6/FormularioComValidacao';
import ListaNomes from './componentes/aula 6/ListaNomes';
import BiDirecional from './componentes/aula 6/BiDirecional';

const App = () => {
  return(
    <div>
      {/* <Formulario></Formulario> */}
      <FormularioComValidacao></FormularioComValidacao>
      <ListaNomes/>
      <BiDirecional></BiDirecional>
    </div>
  );
};





export default App;
