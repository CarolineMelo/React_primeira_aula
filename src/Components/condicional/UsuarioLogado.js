import React from 'react'
import If from './If'

function UsuarioLogado(props) {
    const usuario = props.usuario || {}

    return (
        <>
            <If test={true}>
                <h2>UsuÁrio Logado:</h2>
                <h3>
                    {usuario.nome} - {usuario.email}
                </h3>
            </If>
        </>
    )
}
export default UsuarioLogado