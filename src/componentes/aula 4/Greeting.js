import React from "react";
import PropTypes from 'prop-types';

//componente funcional que aceita props
const Greeting = ({name, age, isStudent, telefone, endereco }) => (
    <div>
        <h1>Hello, {name}!</h1>
        <p>Age: {age}</p>
        <p>{isStudent ? 'você é estudante' : 'você não é estudante'}</p>
        <p>telefone: {telefone}</p>
        <p>endereço: {endereco}</p>
    </div>
);

Greeting.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    telefone: PropTypes.number.isRequired,
    endereco: PropTypes.string.isRequired,
    isStudent: PropTypes.bool
};

Greeting.defaultProps = {
    isStudent: true //vai aparecer que é estudante, no caso se for false vai aparecer que nao é 
};

export default Greeting;