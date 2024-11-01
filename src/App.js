// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate} from 'react-router-dom';
import Home from './componentes/aula 8/Home';
import Users from './componentes/aula 8/Users';
import UserDetail from './componentes/aula 8/UserDatail';

const App = () => {
  return(
   
      <Router>
        <div>
        <nav>
          <Link to="/"> Home </Link> |  <Link to="/users"> Users </Link> 
        </nav>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/users' element={<Users/>} >
            <Route path=':userId' element={<UserDetail/>} /> {/*rota aninhada*/}
          </Route>
          <Route path='*' element={<Navigate to='/'/>} /> {/*redirecionamento*/}
        </Routes>
        </div>
      </Router>
    
  );
}
//teste aqui do commit aula 1

export default App;
