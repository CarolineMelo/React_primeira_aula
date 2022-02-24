import React from "react";
import './Carros.css';


export default function Carros(props) {


    let item="item"
    item += props.azul ? "azul" : ""
    item += props.verde ? "verde" : ""
    item += props.rosa ? "rosa" : ""
    return (



        <div>
            <li className="item">
                <p className="modelo">Modelo: {props.modelo}</p>
                <p className="marca">Marca: {props.marcao}</p>
                <p className="cor">Cor: {props.cor}</p>
                <p className="ano">Ano: {props.ano}</p>
                <p className="portas">Portas: {props.portas}</p>
                <p className="combustivel">Combustível: {props.combustivel}</p>
                <p className="cambio">Câmbio{props.cambio}</p>
                <p className="tamanho">Tamanho do aro: {props.tam_aro}</p>
                <p className="potencia">Potência máxima: {props.potencia}</p>
                <p className="preco">Preço: R$ {props.preco}</p>
            </li>
        </div>


    )



}