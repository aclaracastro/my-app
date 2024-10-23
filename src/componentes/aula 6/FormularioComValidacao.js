import React from "react";

const FormularioComValidacao = () => {
    const [email, setEmail] = React.useState('');
    const [error, setError] = React.useState('');
    const [cpf, setCpf]     = React.useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangeCpf = (e) => {
        setCpf(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(cpf.length !== 14 || !cpf.includes('.') || !cpf.includes('-')){
            setError('cpf invalido')
        } else{
            setError('');
            console.log('CPF enviado:', cpf);
        }
        // if (!email.includes('@')) {
        //     setError('Email invalido');
        // } else {
        //     setError('');
        //     console.log('Email enviado:', email);
        // };
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={handleChangeEmail}/>
            <input type="text" value={cpf}  onChange={handleChangeCpf}/>
            {error && <span>{error}</span>} 
            <button type="submit">Enviar</button>
        </form>
    )
}

export default FormularioComValidacao;