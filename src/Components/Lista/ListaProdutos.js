import Produtos from './Produtos'

function ListaProdutos(props) {

    function exibirLista() {
        return Produtos.map(p => {
            return (
                <li>
                    <div>{p.id}</div>
                    <h3>{p.nome} tem preço R$ {p.preco}</h3>

                </li>
            )
        })
    }

    return (
        <>
            <h2>
                Lista de Produtos
            </h2>
            {obterLista()}
        </>
    )


}
export default ListaProdutos