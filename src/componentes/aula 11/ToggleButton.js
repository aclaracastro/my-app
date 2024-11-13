import React, {useState} from "react";

const ToggleButton = () => {
    const [text, setText] = useState("clique para alterar");
    return <button onClick={() => setText("texto alterado")}>{text}</button>
}

export default ToggleButton