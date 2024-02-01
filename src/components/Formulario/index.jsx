import { useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("o componente iniciou");

        return () => {
            console.log("o componente finalizou");
        }
    }, []);

    useEffect(() => {
        console.log("estado nome mudou");
    }, [nome]);

    const alteraNome = ({ target: { value } }) => {
        setNome(value);
    };

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado!</p>
            )
        } else {
            return (
                <p>Olá {nome}, você não foi aprovado!</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(num => (
                    <li key={num}>{num}</li>
                ))}
            </ul>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" value={materiaA} onChange={({ target: { value } }) => setMateriaA(parseInt(value))} />
            <input type="number" placeholder="Nota matéria B" value={materiaB} onChange={e => setMateriaB(parseInt(e.target.value))} />
            <input type="number" placeholder="Nota matéria C" value={materiaC} onChange={e => setMateriaC(parseInt(e.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;