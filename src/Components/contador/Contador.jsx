
import React, { useState } from 'react'
import './Contador.css'


function Contador(props) {



    const [numero, setNumero] = useState(props.inicial)


    //let numero = 10;
    const incremento = () => {
        if (numero == props.max) {
            alert("Você atingiu o número máximo")
            return
        }
        setNumero(numero + props.passo)
    }

    console.log(numero)

    const decremento = () => { 

        if (numero == props.min) {
            alert("Você atingiu o número mínimo")
            return
        }
       

        setNumero(numero - props.passo) 
        
    }

    return (
        <div>
            <h2>CONTADOR</h2>
            <h2> {numero}</h2>
            <button onClick={incremento}>+</button>
            <button onClick={decremento}>-</button>
        </div>
    )

}

export default Contador