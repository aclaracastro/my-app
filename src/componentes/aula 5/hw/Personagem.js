import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import './Grid.css';

const Personagem = () => {
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    fetch('https://swapi.py4e.com/api/people')
      .then(response => response.json())
      .then(data => {
        setProduto(data.results); 
      })
      .catch(error => console.log('Erro ao buscar produtos', error));
  }, []);

  return (
    <>

      <Grid container spacing={2} justifyContent= 'center' >
        {produto.map((produto) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={produto.id} >

            
            <h3 className='nome'>{produto.name}</h3>
            <p className='altura'>{produto.height}cm</p>
            <p className='massa'>{produto.mass}kg</p>
            <p className='cor do cabelo'>{produto.hair_color}</p>
            <p className='cor da pele'>{produto.skin_color}</p>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Personagem;