import React from "react";
import InputComponente from './InputComponente';

const FormularioPai = () => {
    const [formData, setFormData] = React.useState({name: '', email: ''});

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    return(
        <div>
            <InputComponente 
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}/>
                
            <InputComponente 
            label="email"
            name="email"
            value={formData.email}
            onChange={handleChange}/>
        </div>
    );
}

export default FormularioPai;






