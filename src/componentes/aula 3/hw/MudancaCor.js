import React, { useState } from 'react'; //função

const MudancaCor = () => {
    const [cor, setCor] = useState('white');

    const cores = ['red','green','blue','yellow','purple'];


    const mudaCor = () => {
        const indiceAleat = Math.floor(Math.random() * cores.length);
        const novaCor = cores[indiceAleat];
        setCor(novaCor);
    }


    return(
        <div style={{backgroundColor: cor}}>
            <button onClick={mudaCor}>Muda cor</button>
        </div>
    );

};
 export default MudancaCor;