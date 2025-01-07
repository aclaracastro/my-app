// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom';
import StyledCard from './componentes/aula 9/StyledCard';
import StdButton from './componentes/aula 9/StdButton';
import CardTeste from './componentes/aula 9/CardTeste';
import ContagemPai from './componentes/aula 4/hw/ContagemPai';
import Personagem from './componentes/aula 5/hw/Personagem';
import ListaDeNomes from './componentes/aula 6/hw/ListaDeNomes';
import Counter from './componentes/aula 8/hw/Counter';
import { Provider } from 'react-redux';
import store from './componentes/aula 8/hw/store';
import Grid from './componentes/aula 8/hw/Grid';


const App = () => {
  return(
    <>
      {/* <StdButton/>
      <StyledCard/> */}
      {/* <CardTeste/> */}
      <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <h1>Contador de Visualizações de Personagens</h1>
        
        {/*contagem de visualizações de personagens */}
        <Counter />
        
        {/* Componente Grid para buscar e exibir personagens */}
        <Grid />
      </div>
    </Provider>
      <ContagemPai/>
      <Personagem/>
      <ListaDeNomes/>
    </>
  );
}


export default App;
