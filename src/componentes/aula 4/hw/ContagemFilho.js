import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function ContagemFilho({ contador, incrementar, decrementar }) {
  useEffect(() => {
    console.log('Contagem atualizada:', contador);
  }, [contador]);

  return (
    <div>
      <p>Contagem: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  );
}

ContagemFilho.propTypes = {
  contador: PropTypes.number,
  incrementar: PropTypes.func,
  decrementar: PropTypes.func,
};

export default ContagemFilho;