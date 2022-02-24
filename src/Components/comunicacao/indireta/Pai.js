import React, { Fragment, useState } from "react";
import Filho from "../indireta/Filho";

function Pai(props) {
    const [texto, setTexto] = useState('')
    const [num, setNum] = useState(0) //definindo o estado incicial

    function setValores(texto, numero) {
        setTexto(texto)
        setNum(numero)

    }

    return (
        <Fragment>
            <span>
                <strong>
                    {texto} {num}
                    <Filho funcao={setValores} />
                </strong>
            </span>
        </Fragment>


    )


}
export default Pai