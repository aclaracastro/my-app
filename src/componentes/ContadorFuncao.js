import React, { useState } from 'react'; //useState é uma função usada para criar um estado dentro de um componente funcional do React, ele permite que você adicione e gerencie estados locais

const ContadorFuncao = () => {
    const [contador, setContador] = useState(0);
    const incrementar = () => {
    setContador(contador + 1);
    };
    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button 
            onClick={incrementar}>Incrementar</button>
        </div>
    );
};
 export default ContadorFuncao;