import React, { Component } from 'react'


class CadastroNome extends Component {

    constructor (props) {
        super(props)

        this.state = {
            nome: ''
        }
    }
    reder() {

        return (
            <div>
                

                <h1>Olá, {this.props.nome} </h1>
                <input type = "texto"
                placeholder="Digite seu nome"
                value = {this.state.nome}
                onChange={(event) => this.setState({ nome: event.target.value})}
                />

            </div>
        )
    }
}
export default CadastroNome