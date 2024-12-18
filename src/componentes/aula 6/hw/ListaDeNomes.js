import React, { useState, useEffect } from 'react';

const ListaDeNomes = () => {
    const [nomes, setNomes] = useState([]);

    useEffect(() => {
        fetch('https://swapi.py4e.com/api/people')
            .then(response => response.json())
            .then(data => {
                setNomes(data.results);
            })
            .catch(error => {
                console.log('Ocorreu um erro ao buscar os nomes', error);
            });
    }, []);

    return (
        <div>
            <ul>
                {nomes.map((nome, index) => (
                    <li key={index}>{nome.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListaDeNomes;