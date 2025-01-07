//exibe as propriedades de cada personagem
import React from "react";
import { Button } from "@mui/material";

function Personagem ({ personagem, dispatch }) {
    const handleViewDetails = () => {
        dispatch({ type: 'increment' });
    };

    return(
        <div className="card">
            <h2>{personagem.name}</h2>
            <h4>altura: {personagem.height}cm</h4>
            <h4>peso: {personagem.mass} kg</h4>
            <h4>cor de cabelo: {personagem.hair_color}</h4>
            <h4>cor: {personagem.skin_color}</h4>
            <Button variant="outlined" onClick={handleViewDetails} >
                Ver detalhes
            </Button>
        </div>
    )
}

export default Personagem;