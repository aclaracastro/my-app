import React from "react";
// import './DogCards.css';

function DogsCards({imageUrl, isVisible}) {
    const errorMsg = 'Erro ao buscar a imagem de cachorro'

    return (
        <div>
            {isVisible ?  errorMsg :
                <div className="card">
                    <img src={imageUrl} alt="Random Dog" className="dog-image" />
                    <div className="card-content">
                        <h2>Random Dog</h2>
                        <p>Este é um cachorro gerado aleatoriamente</p>
                    </div>
                </div>
            }
        </div>
    );
}



export default DogsCards;