import React from "react";
 const ListaNomes = () => {
    const nomes = ['ana','felipe','mario','fabio']

    return(
        <ul>
            {nomes.map((nome, index) => (
                <li key={index}>{nome}</li>
            ))}
        </ul>
    )
 }

 export default ListaNomes;