//exibe o total de visualizações de personagens
import React from "react";
import { useSelector } from "react-redux";

export const Counter = () => {
    const count = useSelector((state) => state.count);
    
    return(
        <div>
            <p>Total de visualizações: {count}</p>
        </div>
    );
};

export default Counter;