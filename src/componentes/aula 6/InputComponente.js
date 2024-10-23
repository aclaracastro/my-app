import React from "react";

const InputComponente = ({label, name, value, onChange}) => { //props
    return(
        <div>
            <label>{label}</label>
            <input name={name} value={value} onChange={onChange}/>
        </div>
    );
}

export default InputComponente;