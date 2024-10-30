// import logo from './logo.svg';
import React, { Component } from 'react';
import {Provider} from "react-redux";
import store from './componentes/aula 7 pt 1/store';
import Counter from './componentes/aula 7 pt 1/Counter';
import StyledButton from './componentes/aula 7 pt 2/StyledButton'
import ProgressCircle from './componentes/aula 7 pt 2/ProgressCircle';

const App = () => {
  return(
    //provider e counter-> para parte 1 da aula 7 (redux)
    // <Provider store={store}>
    //   <Counter/>
    // </Provider>

    <div>
      <StyledButton/>
      <ProgressCircle />
    </div>
  );
};





export default App;
