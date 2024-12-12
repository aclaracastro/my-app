import React, { useState } from 'react';
import ContagemFilho from './ContagemFilho';

function ContagemPai() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <ContagemFilho
        contador={contador}
        incrementar={incrementar}
        decrementar={decrementar}
      />
    </div>
  );
}

export default ContagemPai;