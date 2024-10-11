import React, {useState, useEffect} from "react";

const Timer = () => {
    const [count, setCount] = useState(0);

    //useEffect para atualizar o titulo da pagina a cada mudança
    useEffect(() => {
        document.title = 'Count: ${count}';
    }, [count]); //executa apenas quando o 'count' muda

    return(
        <div>
            <p>Contador: {count}</p>
            <button onClick={() => setCount(count+1)}>Incremento</button>
        </div>
    )
};

export default Timer;