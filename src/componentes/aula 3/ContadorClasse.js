import React, { Component } from 'react';

class ContadorClasse extends Component {
  constructor() { //precisa do construtor
    super(); //pra extender a classe componente
    this.state = { //objeto que recebe tudo de todas as formas
      contador: 0,
    };
  }

  incrementar = () => {
    this.setState((prevState) => ({ //o estado que ele vai receber
      contador: prevState.contador + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Contador(classe): {this.state.contador}</h1>
        <button onClick={this.incrementar}>Incrementar</button>
      </div>
    );
  }
}

export default ContadorClasse;