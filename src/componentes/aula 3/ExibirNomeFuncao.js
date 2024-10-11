import React, {useState}  from 'react'

const ExibirNomeFuncao = () => {
  const [contador, setNome] = useState('');
  const mudarNomeParaJoao = () => {
      setNome('Rafael');
  };

  return (
      <div>
          <h1>Nome: {contador}</h1>
          <button onClick={mudarNomeParaJoao}>
            Rafael
          </button>
      </div>
  );
}

export default ExibirNomeFuncao;